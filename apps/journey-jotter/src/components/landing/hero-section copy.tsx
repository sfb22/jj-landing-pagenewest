import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PolaroidProps {
  images: string[];
}

const PolaroidStack: React.FC<PolaroidProps> = ({ images }) => {
  const generateImageInstances = () => {
    return images.flatMap((image, idx) =>
      Array(12)
        .fill(image)
        .map((img, dupIdx) => ({
          src: img,
          id: `${idx}-${dupIdx}`,
        }))
    );
  };

  const getPosition = (index: number) => {
    const angleStep = (2 * Math.PI) / 48; // Distribute points in a circle
    const angle = index * angleStep;
    const radius = 300; // Controls how far images spread from center

    // Create a spiral effect with increasing radius
    const adjustedRadius = radius * (1 + (index % 4) * 0.2);

    // Calculate positions using trigonometry for better distribution
    const seedX = Math.cos(angle) * adjustedRadius;
    const seedY = Math.sin(angle) * adjustedRadius;
    const rotation = Math.sin(index * 0.5) * 30; // Rotation -30 to 30 degrees

    return {
      x: seedX,
      y: seedY,
      rotation,
      zIndex: index % 10,
    };
  };

  const imageInstances = generateImageInstances();

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-0 h-0">
        {imageInstances.map((image, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={image.id}
              className="absolute transition-all duration-300 ease-in-out hover:scale-105 hover:z-50 hover:rotate-0"
              style={{
                transform: `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotation}deg)`,
                zIndex: pos.zIndex,
                marginLeft: "-120px", // Half the width of the Polaroid
                marginTop: "-160px", // Half the height of the Polaroid
              }}
            >
              <div className="w-60 bg-white shadow-lg p-3 transition-shadow duration-200 hover:shadow-xl">
                <div className="relative aspect-[4/5]">
                  <img
                    src={image.src}
                    alt={`Polaroid ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 mb-2 flex justify-center">
                  <div className="h-1 w-16 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export function HeroSection() {
  const images = [
    "/testimonial/sam1.jpg",
    "/testimonial/sam2.jpg",
    "/testimonial/sam3.jpg",
    "/testimonial/sam4.jpg",
  ];

  return (
    <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Polaroid Background */}
      <div className="absolute inset-0 opacity-50">
        <PolaroidStack images={images} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full container max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center h-full max-w-2xl text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Your Travel Stories,{" "}
            <span className="text-primary-foreground">Beautifully Told</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Transform your travel memories into captivating stories with
            AI-powered journaling that brings your adventures to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-white hover:bg-white/20 text-white text-lg px-8 py-6"
            >
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex items-center gap-8">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                >
                  <img
                    src={`/testimonial/sam${i}.jpg`}
                    alt={`User ${i}`}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-white/90 font-medium">
                Joined by 10,000+ travelers
              </p>
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i}>★</span>
                ))}
                <span className="text-white/90 ml-2">4.9/5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
