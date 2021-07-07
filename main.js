//49b8a4c0bb786f82a88a5ade5598597c
// api.openweathermap.org/data/2.5/weather?q=Riverside&appid=49b8a4c0bb786f82a88a5ade5598597c
function showWeather(){
    const city = $("input").val();
    const url = 
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e78c406571d6b36e4012e42a7789149
    `

    fetch(url)
    .then(response =>  response.json())
    .then(data => {
        const {main, wind, visibility } = data;

        const ul = `<ul> 
        <li> Temperature: ${ toF( main.temp)} F</li>
        <li> Feels like: ${ toF( main.feels_like)} F</li>
        <li> Humidity: ${ main.humidity} %</li>
        <li> Wind speed: ${wind.speed} mi/hr</li>
        <li> Wind direction: ${ wind.deg} &deg;</li>
        <li> Visibility: ${ visibility} mi</li>
        
        </ul>`;
        $("weather").html(ul)
    });
}
function toF(k){
    return Math.round(((k-273.15) *9/5 + 32) *100)/100;
}
/*
main.temp convert to F
main.feels_like
main.humidity
wind.speed
wind.deg
wind.gust*/
