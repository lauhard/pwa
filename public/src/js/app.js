/**
 * NOTE Register service worker
 * Check if service worker is available in navigator (browser)
 * Register service worker in navigator (browser)
 */
var beforeInstallEvent;

console.log("check for service worker...");
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").then(() => {
        console.log("service worker loaded...");
    });
} else {
    console.log("service worker not working...");
}


/**
 * NOTE prevent chrome from shownig A2HS prompt
 */
window.addEventListener("beforeinstallprompt", (event) => {
    beforeInstallEvent = event;
    event.preventDefault();
    return false;
});


// function test (text) {
//     let obj = null;
//     if (2 == text) {
//         for (let index = 0; index < 1000000000000000000; index++) {
//             console.info("function", "berechne output...")            
//         }
//         obj = {
//             isSuccess: true,
//             result: ["apple", "orange"]
//         }
//         return obj;
//     }
//     else {
//         obj = {
//             isSuccess: false,
//             error: "error",
//             result: null
//         }
//         return obj;
//     }
// }

// function myTest(data, callback) {
//     return new Promise( (resolve, reject) => {
//         if (!data.auth) {
//             return reject({error: "you are not authorized"})
//         }
//         if (typeof(callback) == "function") {
//             let result = callback(data.validnumber);
//             return resolve(result);
//         }
//     });
// }

// myTest({validnumber:2, auth: false}, test)
//     .then((result)=>{
//         console.log(result);
//         if (result.isSuccess) {
//             console.info("fruits", result.result);
//         } else {
//             console.info("error", result.error)
//         }
// });
