import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-md [a]:hover:bg-primary/80",
        outline:
          "border-primary bg-transparent text-primary hover:bg-primary/10 hover:-translate-y-0.5 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-white hover:bg-secondary/90 hover:-translate-y-0.5 hover:shadow-md aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "border-2 border-primary text-primary hover:bg-primary/10 hover:-translate-y-0.5 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
        whatsapp:
          "bg-tt-green text-white hover:bg-tt-green-deep hover:-translate-y-0.5 hover:shadow-md",
        "glow-orange":
          "bg-secondary text-white hover:bg-secondary/90 hover:-translate-y-0.5 shadow-lg animate-pulse-glow",
        "glow-green":
          "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-lg animate-pulse-glow",
        "gradient-cta":
          "bg-gradient-to-r from-tt-orange to-tt-tomato text-white hover:from-tt-orange/90 hover:to-tt-tomato/90 hover:-translate-y-0.5 hover:shadow-xl shadow-lg shadow-tt-orange/25 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer before:bg-[length:200%_100%]",
        "gradient-green":
          "bg-gradient-to-r from-tt-green to-tt-lime text-white hover:from-tt-green/90 hover:to-tt-lime/90 hover:-translate-y-0.5 hover:shadow-xl shadow-lg shadow-tt-green/25 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-shimmer before:bg-[length:200%_100%]",
      },
      size: {
        default:
          "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-6 gap-1 rounded-full px-2 text-xs in-data-[slot=button-group]:rounded-full has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "px-4 py-2 text-sm gap-1.5",
        md: "px-6 py-3 text-sm gap-1.5",
        lg: "px-8 py-4 text-base gap-1.5",
        icon: "size-8",
        "icon-xs":
          "size-6 rounded-full in-data-[slot=button-group]:rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-7 rounded-full in-data-[slot=button-group]:rounded-full",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "md",
  href,
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants> & {
  href?: string
}) {
  if (href) {
    return (
      <a
        data-slot="button"
        className={cn(buttonVariants({ variant, size, className }))}
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        {...(props as React.ComponentProps<"a">)}
      />
    )
  }

  return (
    <button
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...(props as React.ComponentProps<"button">)}
    />
  )
}

export { Button, buttonVariants }
