// src/middleware.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Apply to all paths except static files and API routes
  matcher: ["/((?!_next|.*\\..*|api).*)"],
};
