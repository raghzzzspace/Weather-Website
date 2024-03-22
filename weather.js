async function getWeather(city){
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '128853054cmsh877a937cdfac6a6p107175jsn28524d101068',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const jsonResponse = await response.json(); // Use response.json() directly
    console.log(jsonResponse)
    document.getElementById('cityName').innerHTML = city;
    document.getElementById('cloud_pct').innerHTML = jsonResponse.cloud_pct;
    document.getElementById('temp').innerHTML = jsonResponse.temp;
    document.getElementById('feels_like').innerHTML = jsonResponse.feels_like;
    document.getElementById('humidity').innerHTML = jsonResponse.humidity;
    document.getElementById('min_temp').innerHTML = jsonResponse.min_temp;
    document.getElementById('max_temp').innerHTML = jsonResponse.max_temp;
    document.getElementById('wind_speed').innerHTML = jsonResponse.wind_speed;
    document.getElementById('wind_degrees').innerHTML = jsonResponse.wind_degrees;
    document.getElementById('sunrise').innerHTML = jsonResponse.sunrise;
    document.getElementById('sunset').innerHTML = jsonResponse.sunset;
} catch (error) {
	console.error(error);
}
}

document.getElementById('submit').addEventListener('click',(e)=>{
    e.preventDefault()
    getWeather(document.getElementById('city').value)
})

getWeather('Delhi')

async function getWeatherForShanghai() {
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '128853054cmsh877a937cdfac6a6p107175jsn28524d101068',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const jsonResponse = await response.json(); // Use response.json() directly
    console.log(jsonResponse)
    document.getElementById('s1').innerHTML = jsonResponse.cloud_pct;
    document.getElementById('s2').innerHTML = jsonResponse.temp;
    document.getElementById('s3').innerHTML = jsonResponse.feels_like;
    document.getElementById('s4').innerHTML = jsonResponse.humidity;
    document.getElementById('s5').innerHTML = jsonResponse.min_temp;
    document.getElementById('s6').innerHTML = jsonResponse.max_temp;
    document.getElementById('s7').innerHTML = jsonResponse.wind_speed;
    document.getElementById('s8').innerHTML = jsonResponse.wind_degrees;
    document.getElementById('s9').innerHTML = jsonResponse.sunrise;
    document.getElementById('s10').innerHTML = jsonResponse.sunset;
} catch (error) {
	console.error(error);
}
}
getWeatherForShanghai();
setInterval(getWeatherForShanghai, 600000); // Fetch every 10 minutes (600000 milliseconds)


async function getWeatherForBoston() {
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '128853054cmsh877a937cdfac6a6p107175jsn28524d101068',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const jsonResponse = await response.json(); // Use response.json() directly
    console.log(jsonResponse)
    document.getElementById('b1').innerHTML = jsonResponse.cloud_pct;
    document.getElementById('b2').innerHTML = jsonResponse.temp;
    document.getElementById('b3').innerHTML = jsonResponse.feels_like;
    document.getElementById('b4').innerHTML = jsonResponse.humidity;
    document.getElementById('b5').innerHTML = jsonResponse.min_temp;
    document.getElementById('b6').innerHTML = jsonResponse.max_temp;
    document.getElementById('b7').innerHTML = jsonResponse.wind_speed;
    document.getElementById('b8').innerHTML = jsonResponse.wind_degrees;
    document.getElementById('b9').innerHTML = jsonResponse.sunrise;
    document.getElementById('b10').innerHTML = jsonResponse.sunset;
} catch (error) {
	console.error(error);
}
}
getWeatherForBoston();
setInterval(getWeatherForBoston, 600000); // Fetch every 10 minutes (600000 milliseconds)

async function getWeatherForLucknow() {
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '128853054cmsh877a937cdfac6a6p107175jsn28524d101068',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const jsonResponse = await response.json(); // Use response.json() directly
    console.log(jsonResponse)
    document.getElementById('l1').innerHTML = jsonResponse.cloud_pct;
    document.getElementById('l2').innerHTML = jsonResponse.temp;
    document.getElementById('l3').innerHTML = jsonResponse.feels_like;
    document.getElementById('l4').innerHTML = jsonResponse.humidity;
    document.getElementById('l5').innerHTML = jsonResponse.min_temp;
    document.getElementById('l6').innerHTML = jsonResponse.max_temp;
    document.getElementById('l7').innerHTML = jsonResponse.wind_speed;
    document.getElementById('l8').innerHTML = jsonResponse.wind_degrees;
    document.getElementById('l9').innerHTML = jsonResponse.sunrise;
    document.getElementById('l10').innerHTML = jsonResponse.sunset;
} catch (error) {
	console.error(error);
}
}
getWeatherForLucknow();
setInterval(getWeatherForLucknow, 600000); // Fetch every 10 minutes (600000 milliseconds)



async function getWeatherForKolkata() {
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '128853054cmsh877a937cdfac6a6p107175jsn28524d101068',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
    const jsonResponse = await response.json(); // Use response.json() directly
    console.log(jsonResponse)
    document.getElementById('k1').innerHTML = jsonResponse.cloud_pct;
    document.getElementById('k2').innerHTML = jsonResponse.temp;
    document.getElementById('k3').innerHTML = jsonResponse.feels_like;
    document.getElementById('k4').innerHTML = jsonResponse.humidity;
    document.getElementById('k5').innerHTML = jsonResponse.min_temp;
    document.getElementById('k6').innerHTML = jsonResponse.max_temp;
    document.getElementById('k7').innerHTML = jsonResponse.wind_speed;
    document.getElementById('k8').innerHTML = jsonResponse.wind_degrees;
    document.getElementById('k9').innerHTML = jsonResponse.sunrise;
    document.getElementById('k10').innerHTML = jsonResponse.sunset;
} catch (error) {
	console.error(error);
}
}
getWeatherForKolkata();
setInterval(getWeatherForKolkata, 600000); // Fetch every 10 minutes (600000 milliseconds)