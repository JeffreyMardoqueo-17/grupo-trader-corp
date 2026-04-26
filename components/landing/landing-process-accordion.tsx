"use client";

import { useState } from "react";
import { processSteps } from "@/components/landing/content";

export function LandingProcessAccordion() {
  const [openId, setOpenId] = useState(processSteps[0]?.id ?? "01");

  return (
    <div className="space-y-3">
      {processSteps.map((step) => {
        const isOpen = openId === step.id;

        return (
          <article key={step.id} className="rounded-2xl border border-border bg-background/80">
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? "" : step.id)}
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={`process-${step.id}`}
            >
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] text-(--gold)">{step.id}</p>
                <p className="mt-1 text-base font-semibold text-foreground">{step.title}</p>
              </div>
              <span
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
                aria-hidden="true"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            <div
              id={`process-${step.id}`}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-sm leading-7 text-muted-foreground">{step.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}