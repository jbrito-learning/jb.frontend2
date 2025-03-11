import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const SECRET_KEY = process.env.AUTH_SECRET || "super_secret_key";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("f2token")?.value;

  if (!token) {
    // Se não houver token, redireciona para a página de login
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log(token);

  try {
    // Verifica se o token é válido usando jose em vez de jsonwebtoken
    await jwtVerify(token, new TextEncoder().encode(SECRET_KEY));
    return NextResponse.next(); // Permite o acesso à rota
  } catch (error) {
    console.error(error);
    // Se o token for inválido ou expirado, redireciona para login
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Define em que rotas o middleware será aplicado
export const config = {
  matcher: ["/user/:path*"], // Apenas estas rotas serão protegidas
};
