function deleteInvalids(receivedData) {

    if (Array.isArray(receivedData) === false) {
        return "Invalid Array";
    }

    let myNewArray = [];
    for (const received of receivedData) {
        if (typeof received === "number") {
            if (isNaN(received) === false) {
                myNewArray.push(received);
            }          
        }
    }
    return myNewArray;
}


const setData = deleteInvalids( ["sojib", NaN, 1520]  );
console.log(setData); 

