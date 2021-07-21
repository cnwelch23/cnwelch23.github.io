function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  const API_KEY = "90110c6c5296ba96a34270bcbcee731b";
  const CITY_ID = [5855797, 993800, 5777544, 5506956]
  const apiCall = (value,counter) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?id=${value}&appid=${API_KEY}&units=imperial`)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById(`weather_${counter}`).innerHTML = `${data.main.temp.toFixed(0)}°F`;
      });
  };
  CITY_ID.forEach((element,index) => {
    apiCall(element,index)
    })




  var request = new XMLHttpRequest();
  request.open("GET", "temples.json", false);
  request.send(null)
  var obj = JSON.parse(request.responseText);
  
 document.getElementById("address_0").innerHTML = obj.templeList[0].address
 document.getElementById("phone_0").innerHTML = obj.templeList[0].telephone
 document.getElementById("email_0").innerHTML = obj.templeList[0].email
 document.getElementById("services_0").innerHTML = obj.templeList[0].services
 document.getElementById("history_0").innerHTML = obj.templeList[0].history
 document.getElementById("schedule_0").innerHTML = obj.templeList[0].sessionSchedule
 document.getElementById("closures_0").innerHTML = obj.templeList[0].status

 document.getElementById("address_1").innerHTML = obj.templeList[1].address
 document.getElementById("phone_1").innerHTML = obj.templeList[1].telephone
 document.getElementById("email_1").innerHTML = obj.templeList[1].email
 document.getElementById("services_1").innerHTML = obj.templeList[1].services
 document.getElementById("history_1").innerHTML = obj.templeList[1].history
 document.getElementById("schedule_1").innerHTML = obj.templeList[1].sessionSchedule
 document.getElementById("closures_1").innerHTML = obj.templeList[1].status

 document.getElementById("address_2").innerHTML = obj.templeList[2].address
 document.getElementById("phone_2").innerHTML = obj.templeList[2].telephone
 document.getElementById("email_2").innerHTML = obj.templeList[2].email
 document.getElementById("services_2").innerHTML = obj.templeList[2].services
 document.getElementById("history_2").innerHTML = obj.templeList[2].history
 document.getElementById("schedule_2").innerHTML = obj.templeList[2].sessionSchedule
 document.getElementById("closures_2").innerHTML = obj.templeList[2].status

 document.getElementById("address_3").innerHTML = obj.templeList[3].address
 document.getElementById("phone_3").innerHTML = obj.templeList[3].telephone
 document.getElementById("email_3").innerHTML = obj.templeList[3].email
 document.getElementById("services_3").innerHTML = obj.templeList[3].services
 document.getElementById("history_3").innerHTML = obj.templeList[3].history
 document.getElementById("schedule_3").innerHTML = obj.templeList[3].sessionSchedule
 document.getElementById("closures_3").innerHTML = obj.templeList[3].status





