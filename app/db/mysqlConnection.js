

import serverlessMysql from "serverless-mysql";
import mysql from "mysql2/promise"
import { findWeaponInfo } from "../data/utils";

export default async function handler() {
    // const dbConnection = serverlessMysql({
    const dbConnection = await mysql.createConnection({
        // config: {
        host: 'mysql-164554-0.cloudclusters.net',
        database: 'joakimdb',
        user: 'admin',
        password: 'i82lnHyw',
        port: "19904"
        // }
    })
    try {

        const query = 'SELECT * FROM joakiminfo';
        const values = []
        const [results] = await dbConnection.execute(query, values)


        // console.log(results)
        console.log("results[0]", results[0])
        // console.log("results[1].win", results[1].win)
        // console.log("results[1].map weapons:", results.map((weapon) => weapon.weaponName))
        // console.log((findWeaponInfo("scissors", "win").includes("paper") === true))

        // res.status(200).json(results)
        dbConnection.end();
        return results
    } catch (error) {
        console.log(error)
    }
}

