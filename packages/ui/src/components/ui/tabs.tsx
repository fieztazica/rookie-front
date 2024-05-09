"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@repo/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "ui-inline-flex ui-h-10 ui-items-center ui-justify-center ui-rounded-md ui-bg-slate-100 ui-p-1 ui-text-slate-500 dark:ui-bg-slate-800 dark:ui-text-slate-400",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "ui-inline-flex ui-items-center ui-justify-center ui-whitespace-nowrap ui-rounded-sm ui-px-3 ui-py-1.5 ui-text-sm ui-font-medium ui-ring-offset-white ui-transition-all focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-slate-950 focus-visible:ui-ring-offset-2 disabled:ui-pointer-events-none disabled:ui-opacity-50 data-[state=active]:ui-bg-white data-[state=active]:ui-text-slate-950 data-[state=active]:ui-shadow-sm dark:ui-ring-offset-slate-950 dark:focus-visible:ui-ring-slate-300 dark:data-[state=active]:ui-bg-slate-950 dark:data-[state=active]:ui-text-slate-50",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "ui-mt-2 ui-ring-offset-white focus-visible:ui-outline-none focus-visible:ui-ring-2 focus-visible:ui-ring-slate-950 focus-visible:ui-ring-offset-2 dark:ui-ring-offset-slate-950 dark:focus-visible:ui-ring-slate-300",
      className,
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
