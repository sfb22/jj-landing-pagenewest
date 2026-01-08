import {
  GetObjectCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export async function uploadPhotos(
  entryId: string,
  files: File[]
): Promise<{ photoIds: string[]; urls: Record<string, string> }> {
  const formData = new FormData();
  formData.append("entryId", entryId);

  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch("/api/photos/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to upload photos");
  }

  const { photoIds, urls } = await response.json();
  console.log("Photo IDs:", photoIds);
  console.log("Presigned URLs:", urls);

  return { photoIds, urls };
}

// Add this helper function to get multiple URLs at once
export async function getPhotoUrls(
  prefix: string
): Promise<Array<{ id: string; url: string }>> {
  // List all objects with the given prefix
  const listCommand = new ListObjectsV2Command({
    Bucket: process.env.AWS_MEDIA_BUCKET_NAME,
    Prefix: prefix,
  });

  const s3Client = new S3Client({});

  const { Contents = [] } = await s3Client.send(listCommand);

  console.log("Contents:", Contents);

  // Filter for image files
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
  const imageKeys = Contents.filter(
    (item) =>
      item.Key &&
      imageExtensions.some((ext) => item.Key!.toLowerCase().endsWith(ext))
  ).map((item) => item.Key!);

  console.log("Image keys:", imageKeys);

  // Generate signed URLs for each image
  const urlPromises = imageKeys.map(async (key) => {
    const command = new GetObjectCommand({
      Bucket: process.env.AWS_MEDIA_BUCKET_NAME,
      Key: key,
    });

    const url = await getSignedUrl(s3Client, command, {
      expiresIn: 15 * 60, // 15 minutes
    });

    // Extract filename from the key
    const filename = key.split("/").pop() || key;

    return { id: filename, url };
  });

  return Promise.all(urlPromises);
}
