import React, { useState } from "react";
import axios from "axios";

const api = {
    key : "991da66b50de9a47a1330015642cfee4",
    base: "https://api.openweathermap.org/data/2.5/weather?"
}

function WeatherApp() {

    const [data, setData] = useState({});
    const [location, setLocation] = useState("")

    const url = `${api.base}q=${location}&units=metric&appid=${api.key}`;

    const searchClick = event => {
        if (event.key === "Enter") {
            axios.get(url)
                .then((response) => {
                    setData(response.data)
                    console.log(response.data);
                })
        }

        setLocation("")
    }

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
        
        return `${day}, ${date} ${month} ${year}`;
    } 

    return (
        <div className={
            (data.main !== undefined) ? ((data.main.temp >= 30) ? "weather-app warm" : "weather-app") : "weather-app"
            }>
            <main>
                <div className="search-box">
                    <input
                        className="search-bar"
                        type="text"
                        placeholder="Search your city..."
                        onChange={e => setLocation(e.target.value)}
                        onKeyPress={searchClick}
                    />
                </div>
                {
                    data.name !== undefined &&

                    <>
                    
                        <div className="location-box">
                            <div className="location">{data.name}</div>
                            <div className="date">{dateBuilder(new Date())}</div>
                        </div>
                        <div className="weather-box">
                            {
                                data.main ? <div className="temp">{Math.floor(data.main.temp)}°C </div> : null
                            }
                                <div className="weather">
                                    {
                                        data.main ? <p>{data.weather[0].description}</p> : null
                                    }
                                </div>
                        </div>
                        <div className="weather-detail__box">
                            <div className="pressure">
                                <p className="pressure-title">Pressure</p>
                                {
                                    data.main ? <p>{Math.floor(data.main.pressure)} N/m2</p> : null
                                }
                            </div>
                            <div className="humidity">
                                <p className="humidity-title">Humidity</p>
                                {
                                    data.main ? <p>{Math.floor(data.main.humidity)}%</p> : null
                                }
                            </div>
                            <div className="wind">
                                <p className="wind-title">Wind Speed</p>
                                {
                                    data.main ? <p>{Math.floor(data.wind.speed)} MPH</p> : null
                                }
                            </div>
                        </div>

                    </>
                }

                <footer>
                    <p>Develop by Dava Daviar Saputra</p>
                </footer>
            </main>
        </div>
    );
};

export default WeatherApp;