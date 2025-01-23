const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = currentYear;

const lastModified = document.lastModified;
document.getElementById("modification").innerHTML = lastModified;

/*Function*/
let temperature = document.getElementById("degrees");
temperature.value = 10;
temperature.textContent = degrees.value + '°C';

let windSpeed = document.getElementById("windSpeed");
windSpeed.value = 5;
windSpeed.textContent = windSpeed.value + ' km/h';

if (degrees.value >= 10 && windSpeed.value >= 4.8) {
    let windChill = document.getElementById("windChill");
    windChill.value = calculateWindChill(degrees.value, windSpeed.value, true);
    windChill.textContent = windChill.value + '°C';
} else {
    windChill.textContent = "N/A";
}

function calculateWindChill(temperature, windSpeed, isCelsius = true) {
    let windChill;
    if (isCelsius) {
        windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
    } else {
        windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
    }
    return windChill.toFixed(1);
}

