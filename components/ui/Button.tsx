import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-tt-green/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-tt-green text-white hover:bg-tt-green-dark hover:scale-[1.03] hover:shadow-md",
        outline:
          "border-2 border-tt-green bg-transparent text-tt-green hover:bg-tt-green-tint hover:scale-[1.03]",
        secondary:
          "bg-tt-orange text-white hover:bg-tt-orange-dark hover:scale-[1.03] hover:shadow-md",
        ghost:
          "bg-transparent text-tt-green hover:bg-tt-green-tint hover:scale-[1.03]",
        destructive:
          "bg-red-50 text-red-600 hover:bg-red-100",
        link: "text-tt-green underline-offset-4 hover:underline",
        whatsapp:
          "bg-tt-green text-white hover:bg-tt-green-dark hover:scale-[1.03] hover:shadow-md",
        "gradient-cta":
          "bg-gradient-to-r from-tt-orange to-tt-orange-light text-white hover:from-tt-orange-dark hover:to-tt-orange hover:scale-[1.03] hover:shadow-lg shadow-md shadow-tt-orange/20",
        "gradient-green":
          "bg-gradient-to-r from-tt-green to-tt-green-light text-white hover:from-tt-green-dark hover:to-tt-green hover:scale-[1.03] hover:shadow-lg shadow-md shadow-tt-green/20",
      },
      size: {
        default: "h-10 gap-2 px-4",
        xs: "h-7 gap-1.5 rounded-lg px-2.5 text-xs",
        sm: "h-9 gap-1.5 rounded-lg px-3 text-sm",
        md: "h-11 gap-2 rounded-xl px-5 text-sm",
        lg: "h-12 gap-2 rounded-xl px-6 text-base",
        icon: "size-10 rounded-xl",
        "icon-xs": "size-7 rounded-lg",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-11 rounded-xl",
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
