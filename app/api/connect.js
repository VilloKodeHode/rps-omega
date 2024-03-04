// import { end, query } from "../db/mysqlConnection";


// export default async function handler(req, res) {
//     try {
//         const results = await query('SELECT * FROM your_table');
//         res.status(200).json(results);
//     } catch (error) {
//         console.error('Error querying database:', error);
//         res.status(500).json({ error: 'Internal Server Error' });
//     } finally {
//         await end();
//     }
// }