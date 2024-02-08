function calculateMoney(Sells) {

    if (typeof Sells !== "number" || Sells >= 0  === false) {
        return "Invalid Number";
    }

    const ticketPrice = 120;
    const totalSell = ticketPrice * Sells;

    const pionSalary = 500;
    const staffLunch = 8 * 50;
    const dailyCost = pionSalary + staffLunch;
    
    const result = totalSell - dailyCost;
    return result;
}

///number - 2
function checkName(yourName){
    if(typeof yourName !== "string"){
        return "invalid";
    }
    const lastLetter = yourName.slice(-1).toLowerCase();
    const letters = ["a", "y", "i", "e", "o", "u", "w"];
    if(letters.includes(lastLetter)){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}

//number 3
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


// porblem 4

function password(isData) {

    const name = isData.name;
    const birthYear = isData.birthYear;
    const string = "" + birthYear;

    let webName = isData.siteName;
    const websiteName =  webName.charAt(0).toUpperCase() + webName.slice(1)
    const result = websiteName + "#" + name + "@" + string;
    return result ;
    
}