import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.AUTH_SECRET || "super_secret_key";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Verificar se o utilizador existe
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json(
        { error: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    // Verificar password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json(
        { error: "Credenciais inválidas" },
        { status: 401 }
      );
    }

    // Gerar JWT
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, {
      expiresIn: "1h",
    });

    // Guardar token num cookie HTTP seguro
    const response = NextResponse.json({ message: "Login bem-sucedido" });
    response.headers.set(
      "Set-Cookie",
      `f2token=${token}; HttpOnly; Path=/; Max-Age=3600`
    );

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro no login" }, { status: 500 });
  }
}
