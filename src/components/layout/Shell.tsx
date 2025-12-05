import type { ReactNode } from "react";

type ShellProps = {
  children: ReactNode;
};

export function Shell({ children }: ShellProps) {
  return (
    <div className="min-h-screen bg-grayHex-light">
      <div className="mx-auto max-w-shell bg-white shadow-sm">{children}</div>
    </div>
  );
}
