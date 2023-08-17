import React, {useEffect, useState} from "react";

import {CircularProgress, Grid, Typography} from "@mui/material";
import SideBar from "./SideBar";
import './WeatherApp.css';
import {UVIndex} from "./UVIndex";
import {WindStatus} from "./WindStatus";
import {SunRiseSunSet} from "./SunRiseSunSet";
import {Visibility} from "./Visibility";
import {Humidity} from "./Humidity";
import {Pressurecomponent} from "./AirQuality";
import {DayWeekWeatherContainer} from "./DayWeekWeatherContainer";
import {WeatherAppBar} from "./WeatherAppBar";
import Footer from "./footer";
import AppBarExample from "./header";

export const primaryColor = "#FFBF5E";
export const lightGray = "#b0b0b0";
const apiKey = '3aed1336391c477ea48154514230907';
const days = 10;
export const WeatherApp = () => {
    const [isToday, setIsToday] = useState(true);
    const [isFahrenheit, setIsFahrenheit] = useState(true);
    const [data, setData] = useState(null);
    const [loading, setloading] = useState(false);


    const handleDataFromChild = (city) => {
        console.log("data from searchbar:" + city)
        setloading(true)
        getWeatherDataByCity(city)
    }

    function onToggleDayWeek(today) {
        setIsToday(today)
    }

    function onToggleTemp(fahrenheit) {
        setIsFahrenheit(fahrenheit)
    }

    function getCurrentCity() {
        console.log("getCurrentCity called")
        fetch("https://ipinfo.io/json?token=617297fdefa495")
            .then(resp => {
                    console.log("getCurrentCity response")
                    return resp.json()
                }
            )
            .then(respJsonObj => getWeatherDataByCity(respJsonObj.city))
            .catch(e => console.log("getCurrentCity error:" + e.message))

    }

    function getWeatherDataByCity(city) {
        console.log("getWeatherDataByCity called")

        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?q=${city}&key=${apiKey}&days=${days}`;
        fetch(apiUrl)
            .then(response => {
                    console.log("getWeatherDataByCity response" + response)
                    return response.json()
                }
            )
            .then(data => {
                console.log("getWeatherDataByCity response json" + data)

                setloading(false)
                setData(data)
            })
            .catch(error => {
                setloading(false)
                console.error('getWeatherDataByCity Error fetching data:', error)
            })
    }

    useEffect(getCurrentCity, []);
    if (!data) {
        return (<>
                <CircularProgress size={100} style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}/>
            </>
        )
    }

    return (
        <>
            <AppBarExample/>
            <Grid container style={{
                display: "flex",
                padding: "0",
                maxWidth: "1000px",
                marginLeft: "auto",
                marginRight: "auto",
                justifyContent: "center",
                backgroundColor: "#d6d7d"
            }}>
                <Grid item xs={12} sm={5} md={4} lg={4} style={{
                    padding: "16px 32px",
                    backgroundColor: "white"
                }}>
                    <SideBar
                        loading={loading}
                        weathericon={data.current.condition.icon}
                        isFahrenheit={isFahrenheit}
                        currentTemperature={isFahrenheit ? data.current.temp_f : data.current.temp_c}
                        localTime={data.location.localtime}
                        weatherCondition={data.current.condition.text}
                        weatherconditioniconrain={data['current']['condition']['icon']}
                        weatherconditionrain={data['current']['condition']['text']}
                        feelslike={isFahrenheit ? data.current.feelslike_f : data.current.feelslike_c}
                        cloud={data.current.cloud}
                        currentCity={data['location']['name']}
                        currentCountry={data['location']['country']}
                        onDataFromChild={handleDataFromChild}
                    />

                </Grid>

                <Grid item xs={12} sm={7} md={8} lg={8} style={{
                    padding: "1.4vw",
                    backgroundColor: "#f6f6f8"
                }}>
                    <WeatherAppBar isToday={isToday} isFahrenheit={isFahrenheit} onToggleDayWeek={onToggleDayWeek}
                                   onToggleTemp={onToggleTemp}/>
                    <DayWeekWeatherContainer isFahrenheit={isFahrenheit} isToday={isToday}
                                             weekTodayData={data.forecast.forecastday}/>

                    <Typography variant={'h6'} style={{margin: "20px 0px"}}>Today Highlight's</Typography>
                    <Grid container spacing={{xs: 1, sm: 1, lg: 2}}>
                        <Grid item xs={6} sm={6} md={4}>
                            <UVIndex uvIndex={data['current']['uv']}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <WindStatus wind_speed={data['current']['wind_kph']}
                                        wind_direction={data['current']['wind_dir']}
                                        wind_degree={data['current']['wind_degree']}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <SunRiseSunSet riseTime={data.forecast.forecastday[0].astro.sunrise}
                                           setTime={data.forecast.forecastday[0].astro.sunset} riseDiff={"-1m 17s"}
                                           setDiff={"1m 23s"}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>

                            <Humidity humidity={data.current.humidity}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <Visibility visibility={data['current']['vis_km']}/>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4}>
                            <Pressurecomponent pressure={data.current.pressure_in}/>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Footer/>
        </>
    );
};