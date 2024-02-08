// function calculateMoney(Sells) {

//     if (typeof Sells !== "number" || Sells >= 0  === false) {
//         return "Baker Vai it's a Invalid Number"
//     }

//     const ticketPrice = 120;
//     const totalSell = ticketPrice * Sells;

//     const pionSalary = 500;
//     const staffLunch = 8 * 50;
//     const dailyCost = pionSalary + staffLunch;
    
//     const result = totalSell - dailyCost;
//     return result;
// }

// let input = calculateMoney(100);
// console.log(input);



// four.............
// function password(isData) {


//     // if (isData.birthYear.length !== 3) {
//     //     return "invalid"
//     // }

//     const name = isData.name;
//     const birthYear = isData.birthYear;
//     const string = "" + birthYear;

//     let webName = isData.siteName;
//     const websiteName =  webName.charAt(0).toUpperCase() + webName.slice(1)
//     const result = websiteName + "#" + name + "@" + string;
//     return result ;
// }
// let inpuisDataect = {name:"sojib" , birthYear: 1720, siteName: "facebook" ,}
// console.log(password(inpuisDataect));



// problem number  3 virus delete

// function deleteInvalids(receivedData) {
//     let newarray = [];
//     //let new = received;
//     for (const received of receivedData) {
//         if (received === "Number") {
//             newarray.push(received)
//         }
//     }
//     return newarray;
// }
// const setData = deleteInvalids([ 1, 12, 0, -1,]);
// console.log(setData);


// function deleteInvalids(receivedData) {
//     let ssss = [];
//     for (const received of receivedData) {
//         if (typeof received === "number") {
//             if (isNaN(received) === false) {
//                 ssss.push(received);
//             }
            
//         }
//     }
//     return ssss;
// }
// const setData = deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }] );
// console.log(setData);



// problem five

function monthlySavings(arrays, livingCost) {
    if (Array.isArray(arrays) === false && typeof livingCost !== "number") {
        return "Invalid Input";
    }
    let sum = 0;
    for (const arr of arrays) {
        if (arr >= 3000) {
             arr * 20 / 100;
        }
        sum = sum + arr;
        return sum;
    }


    const total = sum - livingCost;
     return total;
}
const mone = [1000,2000,2500];
const cost = 5000;
console.log(monthlySavings(mone, cost));  








function password(userInfo) {
    // Check if all properties are present and birthYear is a 4-digit number
    if (userInfo && userInfo.name && userInfo.birthYear && userInfo.siteName && /^\d{4}$/.test(userInfo.birthYear)) {
        return `${userInfo.siteName}#${userInfo.name}@${userInfo.birthYear}`;
    } else {
        return "invalid";
    }
}

// Example usage:
let userInfo = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(userInfo)); // Output: Google#kolimuddin@1999
