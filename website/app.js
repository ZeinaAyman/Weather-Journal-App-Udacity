/* Global Variables */

//API call provided in email: api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d80f65f935fee4f923369e08455eda21
const keyAPI = 'd80f65f935fee4f923369e08455eda21';

const generate = document.getElementById("#generate");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

generate.addEventListener("click", ()=>{
  const zipCode = document.getElementById("zip").value;

  if(zipCode.value == ''){
    alert("Error. Zip Code is empty!");
  }
});


fetch('http://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${keyAPI}$units=metric')
