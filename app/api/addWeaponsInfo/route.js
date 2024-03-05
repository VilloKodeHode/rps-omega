import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server";




// export async function GET(request) {
//     try {
//         const result = await sql`
//         INSERT INTO weaponsInfo (weaponName, lightColor, darkColor, win)
//         VALUES
//             ('scissors', '#eab308', '#a16207', "paper"),
//             ('rock', '#ef4444', '#b91c1c', "paper"),
//             ('paper', '#3b82f6', '#1d4ed8', "paper"),
//             ('lizard', '#a855f7', '#7e22ce', "paper"),
//             ('spock', '#14b8a6', '#0f766e', "paper"),
//             ('fire', '#f97316', '#c2410c', "paper"),
//             ('water', '#0ea5e9', '#0369a1', "paper");
//     `;
//         return NextResponse.json({ result }, { status: 200 })
//     } catch (error) {
//         return NextResponse.json({ error }, { status: 200 })
//     }
// }