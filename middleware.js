import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/semesters"]);

export default clerkMiddleware((auth, req) => {
  // If the request is for a public route, skip authentication
  if (isPublicRoute(req)) return;

  // Protect other routes
  auth().protect();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
