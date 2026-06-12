const lat = 7.3775;
const lon = 3.9470;

const apiKey = "YOUR_API_KEY";

const weatherURL =
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL =
`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    const response = await fetch(weatherURL);

    const data = await response.json();

    document.querySelector("#current-temp").textContent =
        `${Math.round(data.main.temp)}°C`;

    document.querySelector("#weather-desc").textContent =
        data.weather[0].description;
}

async function getForecast() {

    const response = await fetch(forecastURL);

    const data = await response.json();

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    const days = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    days.slice(0, 3).forEach(day => {

        const p = document.createElement("p");

        const date =
            new Date(day.dt_txt)
            .toLocaleDateString("en-US",
                { weekday: "long" });

        p.textContent =
            `${date}: ${Math.round(day.main.temp)}°C`;

        forecast.appendChild(p);
    });
}

getWeather();
getForecast();