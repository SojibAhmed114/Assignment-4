function password(isData) {

    // if (isData.siteName === 0 || isData.name === 0 ||   isData.birthYear === 0 || isData.birthYear.length !== 4) {
    //     return "invalid";
    // }   // bonus part kaj korte partchi na.

    const name = isData.name;
    const birthYear = isData.birthYear;
    const string = "" + birthYear;

    let webName = isData.siteName;
    const websiteName =  webName.charAt(0).toUpperCase() + webName.slice(1)
    const result = websiteName + "#" + name + "@" + string;
    return result ;
    
}
let inpuisDataect = {name:"sojib", birthYear: 2002, siteName: "facebook"}
console.log(password(inpuisDataect));