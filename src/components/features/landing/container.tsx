import { type ReactNode, type CSSProperties } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function Container({ children, className = '', style }: ContainerProps) {
  return (
    <div className={`max-w-[1200px] mx-auto w-full px-4 ${className}`} style={style}>
      {children}
    </div>
  );
}
