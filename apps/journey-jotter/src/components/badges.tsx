"use client";

import React from "react";
import { Badge } from "@/src/components/ui/badge";
import { Clock, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

export type BadgeStatus = "draft" | "active" | "completed";
type BadgeSize = "sm" | "md" | "lg" | "dropdown";

interface StatusBadgeProps {
  status: BadgeStatus;
  size?: BadgeSize;
}

const statusConfig: Record<
  BadgeStatus,
  { color: string; icon: React.ElementType; text: string }
> = {
  draft: {
    color: "bg-gray-50/50 text-gray-500 border-gray-500 shadow-none ",
    icon: Clock,
    text: "Draft",
  },
  completed: {
    color: "bg-green-50/50 text-green-500 border-green-500 shadow-none ",
    icon: CheckCircle,
    text: "Completed",
  },
  active: {
    color: "bg-blue-50/50 text-blue-500 border-blue-500  shadow-none",
    icon: AlertCircle,
    text: "Active",
  },
};

const sizeConfig: Record<BadgeSize, string> = {
  sm: "text-xs p-0.5 px-2",
  md: "text-sm p-1 px-3",
  lg: "text-base p-1.5 px-4",
  dropdown: "text-sm p-1 px-1",
};

export function StatusBadge({ status, size = "md" }: StatusBadgeProps) {
  console.log("status", status);
  const { color, icon: Icon, text } = statusConfig[status];
  const sizeClass = sizeConfig[size];

  return (
    <Badge
      variant="outline"
      className={cn(
        " shadow-sm inline-flex items-center space-x-1 rounded-md",
        color,

        sizeClass
      )}
    >
      <Icon
        className={`${size === "sm" ? "w-3 h-3" : size === "md" ? "w-4 h-4" : size === "dropdown" ? "w-4 h-4 mr-1" : "w-5 h-5"}`}
      />
      <span className="capitalize">{text}</span>
    </Badge>
  );
}

// Example usage
export function BadgeExamples() {
  return (
    <div className="space-y-4">
      <div className="space-x-2">
        <StatusBadge status="draft" size="sm" />
        <StatusBadge status="completed" size="sm" />
        <StatusBadge status="active" size="sm" />
      </div>
      <div className="space-x-2">
        <StatusBadge status="draft" size="md" />
        <StatusBadge status="completed" size="md" />
        <StatusBadge status="active" size="md" />
      </div>
      <div className="space-x-2">
        <StatusBadge status="draft" size="lg" />
        <StatusBadge status="completed" size="lg" />
        <StatusBadge status="active" size="lg" />
      </div>
    </div>
  );
}
