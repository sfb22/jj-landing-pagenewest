import Link from "next/link";

interface TryForFreeButtonProps {
  size?: "default" | "large";
  className?: string;
}

export function TryForFreeButton({
  size = "default",
  className = "",
}: TryForFreeButtonProps) {
  const sizeClasses = {
    default: "px-12 py-5 text-xl",
    large: "px-16 py-6 text-2xl",
  };

  return (
    <Link
      href="/app"
      className={`inline-flex items-center justify-center ${sizeClasses[size]} font-bold text-white bg-gradient-to-br from-mint-green-400 to-mint-green-500 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 ${className}`}
    >
      Try for free
    </Link>
  );
}
