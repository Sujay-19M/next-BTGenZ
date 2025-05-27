import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
  subtitle?: string;
}

export function SectionTitle({ children, className, subtitle }: SectionTitleProps) {
  return (
    <div className={cn("mb-8 md:mb-12 text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
