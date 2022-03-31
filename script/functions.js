const logging = () => {
    // let eingabe = parseInt(document.getElementById("zahl").value);
    // value = eingabe + 1;
    // console.log(value);
    // let choise = document.getElementById("groeßen").value;
    // console.log(choise);
    // document.getElementById("result").innerHTML = result
    let variableEins = parseInt(document.getElementById("powerTwoInput").value)
    let variableZwei = parseInt(document.getElementById("powerTenInput").value)
    console.log(variableEins)
    console.log(variableZwei)
    console.log(powerTwo())
    console.log(powerTen())

    let result = 0

}

const powerTwo = () =>
{
    const input = document.getElementById("powerTwoList").value;
    const powerTwoarray = ["kibibyte", "mebibyte", "gibibyte", "tebibyte"];
    let index = powerTwoarray.indexOf(input);
    const powerTwo = [10,20,30,40];
    var powerTwoReturn = powerTwo[index];
    return powerTwoReturn
}

const powerTen = () =>
{
    const input = document.getElementById("powerTenList").value;
    const powerTenarray = ["kilobyte", "megabyte", "gigabyte", "terrabyte"];
    let index = powerTenarray.indexOf(input);
    const powerTen = [3,6,9,12];
    var powerTenReturn = powerTen[index];
    return powerTenReturn;
}

const IECtoTenFunction = () =>
{
    console.log("IECtoTenFunction");
    let powerTwoInput = parseInt(document.getElementById("powerTwoInput").value);
    let result = 0;
    result = (powerTwoInput*Math.pow(2,powerTwo()))/Math.pow(10,powerTen());
    document.getElementById("result").innerHTML = result;
    if  (!isNaN(result))
    {
        console.log(result)
    };
    // do the shit lol
}

const TentoIECFunction = () =>
{
    console.log("TentoIECFunction");
}

const IECToTen = document.getElementById("IECToTen")
const tenToIEC = document.getElementById("tenToIEC")
IECToTen.addEventListener("click", IECtoTenFunction)
tenToIEC.addEventListener("click", TentoIECFunction)