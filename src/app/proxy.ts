import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  matcher: [
    {
      source: "/admin/list",
      missing: [{ type: "cookie", key: "session", value: "active" }],
    },
  ],
};
