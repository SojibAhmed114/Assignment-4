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
function password(isData) {

    
    // if (isData.birthYear.length !== 3) {
    //     return "invalid"
    // }

    const name = isData.name;
    const birthYear = isData.birthYear;
    const string = "" + birthYear;

    let webName = isData.siteName;
    const websiteName =  webName.charAt(0).toUpperCase() + webName.slice(1)
    const result = websiteName + "#" + name + "@" + string;
    return result ; 
}
let inpuisDataect = {name:"sojib" , birthYear: 1720, siteName: "facebook" ,}
console.log(password(inpuisDataect));

// || isData.birthYear.length !== 4

