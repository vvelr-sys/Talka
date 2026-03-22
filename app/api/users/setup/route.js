import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ message: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    const { username, profile_image } = body;

    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        username: username,
        profile_image: profile_image,
        is_setup: true,
      },
    });

    return NextResponse.json({ message: "Setup complete" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}