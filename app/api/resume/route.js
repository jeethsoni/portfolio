import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "Jeet_Soni_Resume.pdf");
  const file = await fs.readFile(filePath);
  return new NextResponse(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Jeet_Soni_Resume.pdf"',
    },
  });
}
