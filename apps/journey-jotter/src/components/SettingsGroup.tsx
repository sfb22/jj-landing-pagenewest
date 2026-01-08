"use client";

import React from "react";

interface SettingsGroupProps {
  children: React.ReactNode;
  header?: string;
  footer?: string;
}

export function SettingsGroup({
  children,
  header,
  footer,
}: SettingsGroupProps) {
  return (
    <div>
      {header && (
        <h2 className="text-settings-muted text-sm font-medium mb-1 px-3 tracking-wide uppercase">
          {header}
        </h2>
      )}
      <div className="bg-settings-card rounded-2xl border border-settings-border shadow-sm overflow-hidden ">
        <div className="divide-y divide-settings-divider">{children}</div>
      </div>
      {footer && (
        <p className="text-settings-muted text-sm font-medium mb-0 px-3 mt-1">
          {footer}
        </p>
      )}
    </div>
  );
}
