import { NextRequest, NextResponse } from "next/server";

export function proxy(req: NextRequest) {
  return NextResponse.redirect(new URL("/admin", req.url));
}

export const config = {
  matcher: [
    {
      source: "/admin/list",
      locale: false,
      missing: [{ type: "cookie", key: "session", value: "active" }],
    },
  ],
};
