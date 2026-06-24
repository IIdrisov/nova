import { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageShellProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  innerClassName?: string;
}

export function PageShell({
  children,
  className,
  innerClassName,
  ...props
}: PageShellProps) {
  return (
    <section className={cn("w-full p-3", className)} {...props}>
      <div className={cn("mx-auto w-full max-w-page", innerClassName)}>
        {children}
      </div>
    </section>
  );
}
