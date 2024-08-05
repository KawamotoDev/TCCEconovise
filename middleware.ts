import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ['/'],
  ignoredRoutes: ["/((?!api|trpc))(_next.*|.+\\.[\\w]+$)"]
});

export const config = {
matcher: ["/((?!.*\\..*|_next).*)", "/(api|trpc)(.*)"],
};