"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@repo/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "ui-peer ui-h-4 ui-w-4 ui-shrink-0 ui-rounded-sm ui-border ui-border-slate-200 ui-border-slate-900 ui-ring-offset-white focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-slate-950 focus-visible:ui-ring-offset-2 disabled:ui-cursor-not-allowed disabled:ui-opacity-50 data-[state=checked]:ui-bg-slate-900 data-[state=checked]:ui-text-slate-50 dark:ui-border-slate-800 dark:ui-border-slate-50 dark:ui-ring-offset-slate-950 dark:focus-visible:ui-ring-slate-300 dark:data-[state=checked]:ui-bg-slate-50 dark:data-[state=checked]:ui-text-slate-900",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("ui-flex ui-items-center ui-justify-center ui-text-current")}
    >
      <Check className="ui-h-4 ui-w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
