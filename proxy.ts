import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Bloquea /nose y redirige a 404
  if (request.nextUrl.pathname === "/nose") {
    return NextResponse.rewrite(new URL("/404", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Aplica a todas las rutas EXCEPTO:
     * - archivos estáticos
     * - optimización de imágenes
     * - favicon
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};