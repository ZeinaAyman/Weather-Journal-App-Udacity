/* Global Variables */
const keyApi='d80f65f935fee4f923369e08455eda21';


const generate = document.getElementById("generate");
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1)+'.'+ d.getDate()+'.'+ d.getFullYear();

generate.addEventListener("click", async ()=>{
  const zipCode = document.getElementById("zip").value;
  const feelings = document.getElementById('feelings').value;

  //zip code validation
  if(zipCode == ''){
    alert("Error. Zip Code is empty!");
  }

  //API response
   const apiRes = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=' + keyApi + '&units=metric');
   const data = await apiRes.json();
   const temp = data.main.temp;

   postWeather('/saveData',{temp: temp, date: newDate, feelings: feelings })
   .then(function(){
     addToUI();
   })

});

//Async Post
async function postWeather(url, data = {}){
  await fetch(url,{
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  });
}


//Async GET
const getWeather = async (url='') =>{
  const request = await fetch(url,{
    credentials: 'same-origin',
  });
  try {
  // Transform into JSON
  const weatherData = await request.json();
  return weatherData
  }
  catch(err) {
    alert("a GET Error has occured: ",err);
  }
}

//Display in Index.html
const addToUI = async () =>{
  const request = await fetch("/getData")
  try {
    const weatherData = await request.json();
    document.getElementById("date").innerHTML = "Date: " + weatherData.date;
    document.getElementById("temp").innerHTML = "Temperature: " + weatherData.temp;
    document.getElementById("content").innerHTML = "Feelings: " + weatherData.feelings;
  }catch(err){
    alert("An error has Occured.",err);
  }
}
