import { getCookie, setCookie } from "cookies-next";
//! Not implemented yet
export const setFetchedDataToCookie = (key, data) => {
    const decodedData = decodeURIComponent(JSON.stringify(data));
    setCookie(key, decodedData);

}


export const getCookieData = (key) => {
    try {
        return JSON.parse(getCookie(key))
    } catch (error) {
        console.log("PARSE error:", error)
        return null;
    }

}