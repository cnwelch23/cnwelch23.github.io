async function getData(){
    const url = "https://byui-cit230.github.io/weather/data/towndata.json";

    const response = await fetch (url);
    if (response.status==200) {
        return response.json();
    }
    else {
        throw new Error("No data found "+response.status);
    }
}
const d = getData()
.then(function(data){
    console.log(data)
    console.log(data.towns[0].name)
    document.getElementById("founded").innerHTML = data.towns[6].yearFounded
    document.getElementById("population").innerHTML = data.towns[6].currentPopulation
    document.getElementById("rainfall").innerHTML = data.towns[6].averageRainfall
    document.getElementById("name").innerHTML = data.towns[6].name
    document.getElementById("motto").innerHTML = data.towns[6].motto

    document.getElementById("onefounded").innerHTML = data.towns[0].yearFounded
    document.getElementById("onepopulation").innerHTML = data.towns[0].currentPopulation
    document.getElementById("onerainfall").innerHTML = data.towns[0].averageRainfall
    document.getElementById("onename").innerHTML = data.towns[0].name
    document.getElementById("onemotto").innerHTML = data.towns[0].motto

    document.getElementById("twofounded").innerHTML = data.towns[2].yearFounded
    document.getElementById("twopopulation").innerHTML = data.towns[2].currentPopulation
    document.getElementById("tworainfall").innerHTML = data.towns[2].averageRainfall
    document.getElementById("twoname").innerHTML = data.towns[2].name
    document.getElementById("twomotto").innerHTML = data.towns[2].motto





})