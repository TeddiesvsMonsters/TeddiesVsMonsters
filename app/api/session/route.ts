import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: Request ){
    const session = await getServerSession(authOptions);

    if (session){
        // resdirect to protect route
       /*  return NextResponse.redirect("/login"); */
    }
    return NextResponse.json({
        authenticated : !!session,
        session
    })
}