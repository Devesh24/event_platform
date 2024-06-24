import { clerkMiddleware } from "@clerk/nextjs/server";
// import { authMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();
// export default authMiddleware({
//     publicRoutes: [
//       '/',
//       '/events/:id',
//       '/api/webhook/clerk',
//       '/api/webhook/stripe',
//       '/api/uploadthing',
//     ],
//     ignoredRoutes: [
//       '/api/webhook/clerk',
//       '/api/webhook/stripe',
//       '/api/uploadthing'
//     ]
//   });

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
// };