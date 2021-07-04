const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var d = new Date();
var n = d.getDay();
console.log("the day of the week is: " + n);

function myFunction() {
    if (n == 5) {
        document.getElementById("banner-friday").innerHTML =
        "Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.";
    }
}

const API_KEY = "90110c6c5296ba96a34270bcbcee731b";
const CITY_ID = "5607916";
const currentCond = document.getElementById("condition");
const high = document.getElementById("high");
const currentTemp = document.getElementById("temperature");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const windChill = document.getElementById("windChill");

// Weather Summary
const url = `https://api.openweathermap.org/data/2.5/weather?id=${CITY_ID}&appid=${API_KEY}&units=imperial`;
const apiCall = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      currentCond.textContent = data.weather[0].main;
      high.textContent = `${data.main.temp_max.toFixed(0)}°F`;
      currentTemp.textContent = `${data.main.temp.toFixed(0)}°F`;
      humidity.textContent = `${data.main.humidity}%`;
      windSpeed.textContent = `${data.wind.speed.toFixed(0)}mph`;

      const temperatureSplit = Number(currentTemp.textContent.split("°")[0]);
      const windSpeedSplit = Number(windSpeed.textContent.split("m")[0]);

      const windChillFactor = (
        35.74 +
        0.6215 * temperatureSplit -
        35.75 * windSpeedSplit ** 0.16 +
        0.4275 * temperatureSplit * windSpeedSplit ** 0.16
      ).toFixed(0);

      windChill.textContent = `${Number(windChillFactor)}°F`;
    });
};
apiCall()

// Five Day Forecast
const fiveDayForecast = async () => {
    const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const imagesArray = Array.from(document.querySelectorAll(".forecast-img"));
  const daysArray = Array.from(document.querySelectorAll(".forecast-day"));
  const temperaturesArray = Array.from(
    document.querySelectorAll(".forecast-temperature")
  );

  const url = `https://api.openweathermap.org/data/2.5/forecast?id=${CITY_ID}&appid=${API_KEY}&units=imperial`;
  const response = await fetch(url);
  const data = await response.json();
  const filteredArray = data.list.filter(
    (el) => el.dt_txt.split(" ")[1] == "18:00:00"
  );

  const dateAndTime = filteredArray.map((el) => el.dt_txt);
  const getDay = dateAndTime.map((el) => getDayOfTheWeek(el));
  const weekDays = getDay.map((day) => days[day]);
  const iconsArray = filteredArray.map((icon) => icon.weather[0].icon);
  daysArray.map((day, i) => (day.textContent = weekDays[i]));
  imagesArray.map(
    (image, i) =>
      (image.src = `https://openweathermap.org/img/w/${iconsArray[i]}.png`)
  );
  temperaturesArray.map(
    (temperature, i) =>
      (temperature.textContent = `${filteredArray[i].main.temp.toFixed(0)}°F`)
  );
};
fiveDayForecast()
const getDayOfTheWeek = (dateAndTime) => {
  const date = new Date(dateAndTime);
  const utcDate = new Date(date.toUTCString());
  return utcDate.getUTCDay();
};

