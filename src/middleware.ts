import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { decodedToken } from "./utils/jwt";

// Define types for the request and response
interface Request {
  nextUrl: URL;
}

interface DecodedToken {
  email: string;
  role: string;
}

export async function middleware(request: Request) {
  const { pathname } = request.nextUrl;

  // Await cookies() to get the cookies object
  const accessToken = (await cookies()).get(
    "secureStaffMainAccessToken"
  )?.value;

  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.nextUrl.href));
  }

  try {
    // Decode the token
    const decodedData: DecodedToken | undefined = decodedToken(accessToken);
    // const email = decodedData?.email;
    const role = decodedData?.role;

    console.log("decodedData", decodedData);

    const privateRoutesCandidate = [
      "/dashboard/candidate/current-vacancies",
      "/dashboard/candidate/live-chat",
      "/dashboard/candidate/my-profile",
      "/dashboard/candidate/settings",
    ];

    if (privateRoutesCandidate.some((route) => pathname.startsWith(route))) {
      if (role === "candidate") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", request.nextUrl.href));
      }
    }

    const privateRoutesEmployer = [
      "/dashboard/employer/overview",
      "/dashboard/employer/project-requirements",
      "/dashboard/employer/live-chat",
      "/dashboard/employer/my-subscription",
      "/dashboard/employer/settings",
    ];

    if (privateRoutesEmployer.some((route) => pathname.startsWith(route))) {
      if (role === "employer") {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL("/", request.nextUrl.href));
      }
    }

    // const privateRoutes = ["/dashboard"];

    // if (privateRoutes.some((route) => pathname.startsWith(route))) {
    //   if (email) {
    //     return NextResponse.next();
    //   } else {
    //     return NextResponse.redirect(new URL("/", request.nextUrl.href));
    //   }
    // }
  } catch (error: unknown) {
    console.error("Error decoding token:", error);
    return NextResponse.redirect(new URL("/", request.nextUrl.href));
  }
}

export const config = {
  matcher: [
    "/dashboard/candidate/current-vacancies",
    "/dashboard/candidate/live-chat",
    "/dashboard/candidate/my-profile",
    "/dashboard/candidate/settings",

    "/dashboard/employer/overview",
    "/dashboard/employer/project-requirements",
    "/dashboard/employer/live-chat",
    "/dashboard/employer/my-subscription",
    "/dashboard/employer/settings",
  ],
};
