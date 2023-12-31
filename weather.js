const inputBox=document.querySelector(".input-box");
const searchBtn=document.getElementById("searchBtn");
const weather_img=document.querySelector(".weather-image");
const temperature=document.querySelector(".temperature");
const description=document.querySelector(".description");
const humidity=document.getElementById("humidity");
const wind_speed=document.getElementById("wind-speed");

async function checkWeather(city){
    const api_key="2bcb42e5233591e8a32b8fd2a5b5e5eb";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
    const weather_data=await fetch(`${url}`)
    .then(response=>  response.json());
    temperature.innerHTML=`${Math.round(weather_data.main.temp_min-273.15)}°C`
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="images/cloud.png";
            break;
        case 'Clear':
            weather_img.src="images/clear.png";
            break;
        case 'Rain':
            weather_img.src="images/rain.png"
            break;
        case 'Mist':
            weather_img.src="images/mist.png"  
            break;
        case 'Snow':
            weather_img.src="images/snow.png"
            break;  
        default:
            weather_img.src = "images/cloud.png"; 
                break;
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(inputBox.value);
})