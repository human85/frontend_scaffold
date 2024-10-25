import { cn } from '@/lib';

export const Card = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <div
    className={cn(
      'rounded-[28px] border-[#626262] bg-gradient-to-b from-[#1D1D1D] from-[1.94%] via-[#3B3B3B] via-[59.45%] to-[#1D1D1D] to-[99.9%] p-5',
      className
    )}
  >
    {children}
  </div>
);
