import React from "react";

interface LoadingIndicatorProps {
  className?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ className }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <div
        className="w-2 h-2 rounded-full bg-jj-dark-medium animate-bounce"
        style={{ animationDelay: "0ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-jj-dark-medium animate-bounce"
        style={{ animationDelay: "150ms" }}
      ></div>
      <div
        className="w-2 h-2 rounded-full bg-jj-dark-medium animate-bounce"
        style={{ animationDelay: "300ms" }}
      ></div>
    </div>
  );
};

export default LoadingIndicator;
