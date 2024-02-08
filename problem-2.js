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
console.log(checkName(["sojib ahmed safi"]));