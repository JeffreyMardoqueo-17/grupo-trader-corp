"use client";

import { useEffect } from "react";

/**
 * This component prevents "Router action dispatched before initialization" errors
 * by monitoring and preventing router calls during hydration
 */
export function RouterMonitor() {
  useEffect(() => {
    // Track router readiness
    let routerReady = false;
    
    // Mark router as ready after a micro-delay (allowing Next.js to initialize)
    const timer = setTimeout(() => {
      routerReady = true;
    }, 100);

    // Monitor navigation attempts during initialization
    const handleBeforeUnload = () => {
      if (!routerReady) {
        console.warn("🛑 Navigation attempt detected before router initialization");
      }
    };

    // Prevent navigation during hydration by patching window.history
    const originalReplace = window.history.replaceState;
    const originalPush = window.history.pushState;

    let operationCount = 0;

    window.history.replaceState = function (...args) {
      operationCount++;
      if (operationCount > 10) {
        console.error("❌ Multiple router operations detected - possible infinite loop");
        operationCount = 0;
      }
      if (!routerReady && typeof args[2] === "string" && args[2].includes("/nose")) {
        console.error("🚨 FOUND IT! Attempting to navigate to /nose before router ready");
        console.error("Stack:", new Error().stack);
        return; // Prevent the operation
      }
      return originalReplace.apply(this, args);
    };

    window.history.pushState = function (...args) {
      operationCount++;
      if (!routerReady && typeof args[2] === "string" && args[2].includes("/nose")) {
        console.error("🚨 FOUND IT! Attempting to pushState to /nose before router ready");
        console.error("Stack:", new Error().stack);
        return; // Prevent the operation
      }
      return originalPush.apply(this, args);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.history.replaceState = originalReplace;
      window.history.pushState = originalPush;
    };
  }, []);

  return null;
}
