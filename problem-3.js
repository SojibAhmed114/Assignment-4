function deleteInvalids(receivedData) {
    let ssss = [];
    for (const received of receivedData) {
        if (typeof received === "number") {
            if (isNaN(received) === false) {
                ssss.push(received);
            }
            
        }
    }
    return ssss;
}
const setData = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] );
console.log(setData); 