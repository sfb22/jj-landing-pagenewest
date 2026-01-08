import React from "react";
import { ChevronRight, ArrowLeft } from "lucide-react";

interface BreadcrumbsProps {
  current: string;
  onHomeClick?: () => void;
  userName?: string | null;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  current,
  onHomeClick,
  userName,
}) => {
  return (
    <nav className="flex items-center justify-between h-10 text-sm px-4 py-4 border-b border-jj-medium">
      <div className="flex items-center">
        {onHomeClick ? (
          <>
            <button
              onClick={onHomeClick}
              className="text-gray-400 hover:text-blue-500 font-normal hover:underline"
            >
              {userName ? `${userName}'s Trips` : "Trips"}
            </button>
            <ChevronRight className="mx-2 h-4 w-4 text-gray-300" />
            <span className="text-gray-400">{current}</span>
          </>
        ) : (
          <span className="text-gray-400">
            {userName ? `${userName}'s Trips` : "Trips"}
          </span>
        )}
      </div>
      {onHomeClick && (
        <button
          onClick={onHomeClick}
          className="text-gray-400  hover:text-blue-500 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </button>
      )}
    </nav>
  );
};

export default Breadcrumbs;
