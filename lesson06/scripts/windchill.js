function calcWindchill (temperature, windSpeed)
{
    var windChillmessage
    if (temperature > 50 && windSpeed < 3) {
       windChillmessage = "N/A"

    } else {
        var windChill = (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed,0.16)) + 35.74
        windChillmessage = windChill.toString() 
    }
    document.getElementById("wind-chill").innerHTML = windChillmessage;

}