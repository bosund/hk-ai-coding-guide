// components/ui/icon.tsx
import React from 'react';

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(({ children, className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={`material-icons ${className}`}
      {...props}
    >
      {children}
    </span>
  );
});

Icon.displayName = 'Icon';

export { Icon };
