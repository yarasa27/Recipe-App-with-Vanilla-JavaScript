/**
 * @license MIT
 * @copyright 2023 codewithsadee
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const /** {String}  */ APP_ID = "fb01bd29";
const /** {String}  */ API_KEY = "14c4224ab4b4a816c985b85f77dacac1";
const /** {String}  */ TYPE = "public";

/**
 * @param {Array} queries Query array 
 * @param {Function} successCallback Success callback function
 */

export const fecthData = async function(queries, successCallback) {
    const /** {String} */ query = queries?.join("&")
    .replace(/,/g, "=")
    .replace(/ /g, "%20")
    .replace(/\+/g, "%2B")

    const /** {String} */ url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${TYPE}${query ? `&$` : ""}`; 

    const /** {Object} */ response = await fetch(url);

    if(response.ok) {
        const data = await response.json();
        successCallback(data);
    }
}