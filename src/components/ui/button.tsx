import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-transparent text-foreground hover:bg-card hover:border-festival-cyan/50",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Variantes neón del festival
        gradient: 
          "bg-gradient-to-r from-festival-magenta to-festival-cyan text-white font-semibold shadow-lg hover:shadow-neon-magenta hover:scale-105 border-0",
        neon: 
          "bg-festival-cyan text-background font-bold shadow-neon-cyan hover:shadow-neon-cyan hover:scale-105 border-0",
        // Mantener variantes anteriores para compatibilidad
        festival: 
          "bg-gradient-to-r from-festival-cyan to-festival-magenta text-white font-bold tracking-wide transform transition-all duration-300 hover:scale-105 hover:shadow-neon-cyan border-0",
        "festival-outline": 
          "border-2 border-festival-cyan text-festival-cyan bg-transparent font-bold tracking-wide transition-all duration-300 hover:bg-festival-cyan hover:text-background hover:scale-105",
        "festival-secondary": 
          "bg-card text-foreground font-semibold border border-border transition-all duration-300 hover:bg-festival-cyan hover:text-background hover:scale-105",
        cta: 
          "bg-gradient-to-r from-festival-magenta to-festival-cyan text-white font-bold text-lg tracking-wide shadow-neon-magenta transform transition-all duration-300 hover:scale-110 hover:shadow-neon-cyan",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 rounded-lg px-12 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
