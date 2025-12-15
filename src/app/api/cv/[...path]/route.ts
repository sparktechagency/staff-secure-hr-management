import { getServerUrl } from "@/helpers/envConfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    const { path } = params;
    const filename = path.join("/"); // rebuild full path

    // Backend URL
    const serverUrl = getServerUrl();
    const pdfUrl = serverUrl + "/" + filename;

    console.log("Fetching PDF from:", pdfUrl);

    const response = await fetch(pdfUrl);

    if (!response.ok) {
      console.error("Backend responded with status:", response.status);
      return new NextResponse("File not found", { status: 404 });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });
  } catch (err) {
    console.error("Error fetching PDF:", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
