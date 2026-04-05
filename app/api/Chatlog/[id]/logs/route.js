import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req, { params }) {
    try {
        const { id } = params; // chat_session_id

        const logs = await prisma.activityLog.findMany({
            where: {
                chat_session_id: parseInt(id),
            },
            orderBy: {
                created_at: 'desc', // เรียงจากใหม่ไปเก่า
            },
            include: {
                user: {
                    select: {
                        username: true,
                        profile_image: true
                    }
                }
            }
        });

        return NextResponse.json(logs);

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch logs" }, { status: 500 });
    }
}