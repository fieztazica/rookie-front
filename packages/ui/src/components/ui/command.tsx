"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { Search } from "lucide-react";

import { cn } from "@repo/utils";
import { Dialog, DialogContent } from "@repo/ui/dialog.tsx";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "ui-flex ui-h-full ui-w-full ui-flex-col ui-overflow-hidden ui-rounded-md ui-bg-white ui-text-slate-950 dark:ui-bg-slate-950 dark:ui-text-slate-50",
      className,
    )}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

interface CommandDialogProps extends DialogProps {}

const CommandDialog = ({ children, ...props }: CommandDialogProps) => {
  return (
    <Dialog {...props}>
      <DialogContent className="ui-overflow-hidden ui-p-0 ui-shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:ui-px-2 [&_[cmdk-group-heading]]:ui-font-medium [&_[cmdk-group-heading]]:ui-text-slate-500 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:ui-pt-0 [&_[cmdk-group]]:ui-px-2 [&_[cmdk-input-wrapper]_svg]:ui-h-5 [&_[cmdk-input-wrapper]_svg]:ui-w-5 [&_[cmdk-input]]:ui-h-12 [&_[cmdk-item]]:ui-px-2 [&_[cmdk-item]]:ui-py-3 [&_[cmdk-item]_svg]:ui-h-5 [&_[cmdk-item]_svg]:ui-w-5 dark:[&_[cmdk-group-heading]]:ui-text-slate-400">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
};

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div
    className="ui-flex ui-items-center ui-border-b ui-px-3"
    cmdk-input-wrapper=""
  >
    <Search className="ui-mr-2 ui-h-4 ui-w-4 ui-shrink-0 ui-opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "ui-flex ui-h-11 ui-w-full ui-rounded-md ui-bg-transparent ui-py-3 ui-text-sm ui-outline-none placeholder:ui-text-slate-500 disabled:ui-cursor-not-allowed disabled:ui-opacity-50 dark:placeholder:ui-text-slate-400",
        className,
      )}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn(
      "ui-max-h-[300px] ui-overflow-y-auto ui-overflow-x-hidden",
      className,
    )}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="ui-py-6 ui-text-center ui-text-sm"
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "ui-overflow-hidden ui-p-1 ui-text-slate-950 [&_[cmdk-group-heading]]:ui-px-2 [&_[cmdk-group-heading]]:ui-py-1.5 [&_[cmdk-group-heading]]:ui-text-xs [&_[cmdk-group-heading]]:ui-font-medium [&_[cmdk-group-heading]]:ui-text-slate-500 dark:ui-text-slate-50 dark:[&_[cmdk-group-heading]]:ui-text-slate-400",
      className,
    )}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    ref={ref}
    className={cn(
      "ui--mx-1 ui-h-px ui-bg-slate-200 dark:ui-bg-slate-800",
      className,
    )}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "ui-relative ui-flex ui-cursor-default ui-select-none ui-items-center ui-rounded-sm ui-px-2 ui-py-1.5 ui-text-sm ui-outline-none aria-selected:ui-bg-slate-100 aria-selected:ui-text-slate-900 data-[disabled]:ui-pointer-events-none data-[disabled]:ui-opacity-50 dark:aria-selected:ui-bg-slate-800 dark:aria-selected:ui-text-slate-50",
      className,
    )}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

const CommandShortcut = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={cn(
        "ui-ml-auto ui-text-xs ui-tracking-widest ui-text-slate-500 dark:ui-text-slate-400",
        className,
      )}
      {...props}
    />
  );
};
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
