import { type NextRequest, NextResponse } from "next/server"
import enDictionary from "@/lib/dictionaries/en.json"
import esDictionary from "@/lib/dictionaries/es.json"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const lang = searchParams.get("lang") || "en"

  let dictionary

  switch (lang) {
    case "es":
      dictionary = esDictionary
      break
    default:
      dictionary = enDictionary
  }

  return NextResponse.json(dictionary)
}
