const apikey = "4f932bd8981234cfbc96dc3fa743e44b";
const url = "https://api.openweathermap.org/data/2.5/weather?appid=4f932bd8981234cfbc96dc3fa743e44b&units=metric";

async function checkweather(city){
    try{
        const response = await axios.get(url+`&appid=${apikey}&q=${city}`);
        document.querySelector(".temp").innerHTML = response.data.main.temp;
        document.querySelector("p").innerText = city;
        document.querySelector(".percentage").innerText = response.data.main.humidity + "%";
        document.querySelector(".wind-show").innerText = response.data.wind.speed + "Km/h";
        // now changing the pic according to need
        changePic(response.data.weather[0].main);  
    }
    catch(error){
        alert("invalid input wrong place entered");
       let input = document.querySelector("input");
       input.value = "";
        console.log("invalid input wrong place entered");
    }

}

// checking for appropiate images according to weather report
function changePic(weather){
 let images = document.querySelectorAll("img");
 if(weather == "Clouds"){
    images[1].src = "./images/clouds.png";
 }
 else if(weather == "Drizzle"){
    images[1].src = "./images/drizzle.png";
 }
 else if(weather == "Mist"){
    images[1].src = "./images/mist.png";
 }
 else if(weather == "Rain"){
    images[1].src = "./images/rain.png";
 }
 else if(weather == "Snow"){
    images[1].src = "./images/snow.png";
 }
 else{
    images[1].src = "./images/clear.png";
 }
 
}

let img = document.querySelector("img");
let input = document.querySelector("input");

// when we click on earh button
img.addEventListener("click" , function(){
  checkweather(input.value);
});

// when we enter function
document.addEventListener("keydown", function(event) {
    if(event.keyCode == 13){
        checkweather(input.value);
    }
  });

