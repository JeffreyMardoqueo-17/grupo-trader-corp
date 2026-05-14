"use client"

import * as React from "react"
import { Accordion as AccordionPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowDown01Icon, ArrowUp01Icon } from "@hugeicons/core-free-icons"

function Accordion({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn(
        "flex w-full flex-col overflow-hidden rounded-md border",
        className
      )}
      {...props}
    />
  )
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "not-last:border-b border-black/5 dark:border-white/10 transition-colors",
        "data-[state=open]:bg-black/10",
        className,
      )}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "group/accordion-trigger relative flex flex-1 items-center justify-between gap-4 rounded-xl p-0 text-left text-sm font-medium outline-none transition-colors cursor-pointer select-none",
          "hover:text-foreground/90 data-[state=open]:text-foreground",
          className,
        )}
        {...props}
      >
        {children}
        <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} data-slot="accordion-trigger-icon" className="pointer-events-none shrink-0 group-aria-expanded/accordion-trigger:hidden transition-opacity duration-200" />
        <HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={2} data-slot="accordion-trigger-icon" className="pointer-events-none hidden shrink-0 group-aria-expanded/accordion-trigger:inline transition-opacity duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm leading-7 transition-[max-height] duration-300 ease-in-out",
        "data-[state=closed]:max-h-0 data-[state=open]:max-h-[800px]",
        // animate inner content opacity/translate for smoother feel
        "data-[state=closed]:[&_div]:opacity-0 data-[state=open]:[&_div]:opacity-100",
        "data-[state=closed]:[&_div]:translate-y-1 data-[state=open]:[&_div]:translate-y-0",
        "[&_div]:transition-[opacity,transform] [&_div]:duration-200 [&_div]:ease-in-out",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "px-0 pt-0 opacity-0 translate-y-1 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        )}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
