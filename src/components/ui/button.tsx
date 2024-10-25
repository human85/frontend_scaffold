import { cn } from '@/lib';
import { Slot } from '@radix-ui/react-slot';
import twa from '@twa-dev/sdk';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center select-none whitespace-nowrap rounded-full ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-white shadow-[0px_3px_4px_0px_#ffffff66] text-black font-montserrat-medium',
        orange: 'bg-orange-primary text-white font-montserrat-semibold py-3 shadow-[-4px_8px_8px_0px_#ffffffb2_inset]',
        fancy: 'text-orange-primary font-medium fancy-border',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'h-5 rounded-full px-3 text-xs font-montserrat-medium',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading, onClick, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        onClick={e => {
          if (loading) {
            e.preventDefault();
            return;
          }

          onClick?.(e);
          twa.HapticFeedback.impactOccurred('medium');
        }}
        disabled={disabled}
        className={cn(buttonVariants({ variant, size, className }), 'leading-none', {
          'animate-pulse': loading,
        })}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
