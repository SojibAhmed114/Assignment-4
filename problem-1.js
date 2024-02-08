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

let input = calculateMoney(-500);
console.log(input);