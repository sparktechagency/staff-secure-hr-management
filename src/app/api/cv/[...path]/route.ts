import { getServerUrl } from "@/helpers/envConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ path: string[] }> }
) {
  try {
    const { path } = await context.params; // ✅ IMPORTANT
    const filename = path.join("/");

    const serverUrl = getServerUrl();
    const pdfUrl = `${serverUrl}/${filename}`;

    const response = await fetch(pdfUrl);

    if (!response.ok) {
      return new NextResponse("File not found", { status: 404 });
    }

    const buffer = Buffer.from(await response.arrayBuffer());

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (error) {
    console.error("PDF fetch error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
