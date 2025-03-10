import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Verificar se o utilizador já existe
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "Utilizador já existe" },
        { status: 400 }
      );
    }

    // Encriptar password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Criar utilizador na base de dados
    await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return NextResponse.json(
      { message: "Utilizador criado com sucesso" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro no registo" }, { status: 500 });
  }
}
