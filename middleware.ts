import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const supportedLanguages = ["en", "es"]
const defaultLanguage = "en"

export function middleware(request: NextRequest) {
  // Get the pathname
  const pathname = request.nextUrl.pathname

  // Check if the pathname already includes a supported language
  const pathnameHasLanguage = supportedLanguages.some(
    (language) => pathname.startsWith(`/${language}/`) || pathname === `/${language}`,
  )

  if (pathnameHasLanguage) return NextResponse.next()

  // If no language is in the pathname, detect the language or use the default
  let language = defaultLanguage

  // Try to get the preferred language from the Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  if (acceptLanguage) {
    const preferredLanguage = acceptLanguage.split(",")[0].split("-")[0].toLowerCase()

    if (supportedLanguages.includes(preferredLanguage)) {
      language = preferredLanguage
    }
  }

  // Redirect to the same URL but with the language prefix
  return NextResponse.redirect(
    new URL(`/${language}${pathname === "/" ? "" : pathname}${request.nextUrl.search}`, request.url),
  )
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, etc.)
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
