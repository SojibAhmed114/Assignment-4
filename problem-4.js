function password(isData) {

    const name = isData.name;
    const birthYear = isData.birthYear;
    const string = "" + birthYear;

    let webName = isData.siteName;
    const websiteName =  webName.charAt(0).toUpperCase() + webName.slice(1)
    const result = websiteName + "#" + name + "@" + string;
    return result ;
    
}

let inpuisDataect = {name:"safi", birthYear: 2002, siteName: "facebook"}
console.log(password(inpuisDataect));

