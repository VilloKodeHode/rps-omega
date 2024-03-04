// import serverlessMysql from "serverless-mysql"


export default async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log(data)
    return data
}




// export const handler = (req, res) => {

//     const db = serverlessMysql({
//         config: {
//             host: "nefstadutvikling.no.mysql:3306",
//             user: "nefstadutvikling_nonefstadutvikling_userdb",
//             password: "i82lnHyw",
//             database: "nefstadutvikling_nonefstadutvikling_userdb",
//         }

//     })

// }
