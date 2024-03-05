import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";





// async function tableExists() {
//     try {
//         // Check if the table exists
//         await sql`SELECT * FROM weaponsInfo LIMIT 1`;
//         return true;
//     } catch (error) {
//         // If the SELECT statement fails, the table does not exist
//         return false;
//     }
// }

// export async function GET(request) {
//     try {
//         // Check if the table already exists
//         const exists = await tableExists();

//         if (!exists) {
//             // If the table does not exist, create it
//             await sql`CREATE TABLE weaponsInfo (
//                 weaponName varchar(255), lightColor varchar(255), darkColor varchar(255), win varchar(255)
//             )`;

//             // Fill table with data
//             // await sql`
//             //     INSERT INTO weaponsInfo (weaponName, lightColor, darkColor, win)
//             //     VALUES
//             //         ('scissors', '#eab308', '#a16207', ['paper', 'lizard', 'water']),
//             //         ('rock', '#ef4444', '#b91c1c', ['scissors', 'lizard', 'fire']),
//             //         ('paper', '#3b82f6', '#1d4ed8', ['rock', 'spock', 'water']),
//             //         ('lizard', '#a855f7', '#7e22ce', ['spock', 'paper', 'water']),
//             //         ('spock', '#14b8a6', '#0f766e', ['scissors', 'rock', 'fire']),
//             //         ('fire', '#f97316', '#c2410c', ['scissors', 'paper', 'lizard']),
//             //         ('water', '#0ea5e9', '#0369a1', ['rock', 'fire', 'spock']);
//             // `;
//         }

//         return NextResponse.json({ message: 'Table created or already exists.' }, { status: 200 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ error }, { status: 500 });
//     }
// }