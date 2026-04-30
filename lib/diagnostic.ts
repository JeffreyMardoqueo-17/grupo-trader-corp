/**
 * Diagnostic file to track router errors and navigation attempts
 * This file helps identify where "Router action dispatched before initialization" comes from
 */

export function setupRouterDiagnostics() {
  if (typeof window === "undefined") return;

  // Intercept fetch to see what URLs are being requested
  const originalFetch = window.fetch.bind(window);
  window.fetch = function (
    input: RequestInfo | URL,
    init?: RequestInit
  ): Promise<Response> {
    const url = typeof input === "string" ? input : input.toString();
    if (typeof url === "string" && url.includes("/nose")) {
      console.error("❌ DIAGNOSTIC: Attempting to fetch /nose from:", new Error().stack);
    }
    return originalFetch(input, init);
  };

  // Monitor History API
  const originalPush = window.history.pushState.bind(window.history);
  window.history.pushState = function (state: any, unused: string, url?: string | URL | null) {
    console.log("📍 pushState called with:", url);
    return originalPush(state, unused, url);
  };

  // Log any navigation attempts
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const link = target.closest("a") as HTMLAnchorElement | null;
    if (link) {
      const href = link.getAttribute("href");
      if (href && href.includes("nose")) {
        console.error("❌ DIAGNOSTIC: Link click to /nose detected:", href, link);
      }
    }
  });
}

