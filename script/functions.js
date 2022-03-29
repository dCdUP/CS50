const logging = () => {
    // let eingabe = parseInt(document.getElementById("zahl").value);
    // value = eingabe + 1;
    // console.log(value);
    // let choise = document.getElementById("groeßen").value;
    // let result = 0
    // console.log(choise);
    // document.getElementById("result").innerHTML = result

    console.log(powerTwo())
    console.log(powerTen())

}

const powerTwo = () =>
{
    const input = document.getElementById("powerTwoList").value;
    console.log(input)
    const powerTwoarray = ["kibibyte", "mebibyte", "gibibyte", "tebibyte"];
    let index = powerTwoarray.indexOf(input);
    console.log(index);
    const powerTwo = [10,20,30,40];
    var powerTwoReturn = powerTwo[index];
    return powerTwoReturn
}

const powerTen = () =>
{
    const input = document.getElementById("powerTenList").value;
    console.log(input)
    const powerTenarray = ["kilobyte", "megabyte", "gigabyte", "terrabyte"];
    let index = powerTenarray.indexOf(input);
    console.log(index);
    const powerTen = [3,6,9,12];
    var powerTenReturn = powerTen[index];
    return powerTenReturn
}


const button = document.getElementById("knopf")
button.addEventListener("click", logging)