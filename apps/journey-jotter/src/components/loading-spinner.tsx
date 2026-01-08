"use client";

import { Loader2 } from "lucide-react";

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-24">
      <Loader2 className="animate-spin text-primary rounded-full h-10 w-10 " />
    </div>
  );
}
