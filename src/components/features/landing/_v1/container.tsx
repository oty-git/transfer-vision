import { type ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1400px] mx-auto w-full px-12 max-[880px]:px-6 ${className}`}>
      {children}
    </div>
  );
}
