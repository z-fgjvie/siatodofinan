import { NextResponse } from "next/server";

export const middleware = (request) => {
  const token = request.cookies.get("accessToken");

  if (!token) {
    return NextResponse.redirect(
      new URL("/acceso/iniciar-sesion", request.url)
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/mi-cuenta/empresa", "/mi-cuenta/personal", "/dashboard"],
};
