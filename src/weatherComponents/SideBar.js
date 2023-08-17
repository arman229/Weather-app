import React from 'react';
import {LinearProgress, Typography} from '@mui/material';
import weatherimage from '../images/weather_image.jpg'
import cityimage from '../images/city_image.jpg'
import {SearchBar} from "./SearchBar";
import {lightGray} from "./WeatherApp";
import smileimage from "../images/smile.png"
import cloudimage from "../images/clouds.png"

export default function SideBar({
                                    loading,
                                    isFahrenheit,
                                    weathericon,
                                    weatherCondition,
                                    currentTemperature,
                                    localTime,
                                    feelslike,
                                    cloud,
                                    currentCity,
                                    currentCountry,
                                    onDataFromChild
                                }) {
    let subStyle = {display: "flex", columnGap: 4, marginTop: 8, alignItems: 'center'};
    const localDateTime = new Date(localTime);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDayName = weekDays[localDateTime.getDay()];
    const time = localDateTime.toLocaleTimeString("en-US", {hour: 'numeric', minute: 'numeric', hour12: true});
    return (
        <div>
            <SearchBar onDataFromChild={onDataFromChild}/>
            {loading && <LinearProgress style={{marginTop:12}}/>}
            <div>
                <img src={weathericon} width={"60%"}/>
            </div>
            <Typography variant={"p"} fontWeight={"lighter"}> {weatherCondition} </Typography>
            <Typography variant={"h2"} fontWeight={"lighter"}> {currentTemperature}<sup
                style={{fontSize: 32}}>°{isFahrenheit ? "F" : "C"}</sup></Typography>
            <Typography style={{
                borderBottom: `1px solid ${lightGray}`,
                padding: "18px 0px",
                marginBottom: 18
            }}>{weekDayName} <span
                style={{opacity: 0.4}}>{time}</span></Typography>


            <div style={subStyle}>
                <img src={cloudimage} width={30} height={30}/>
                <Typography variant={'body2'}>Cloud  &nbsp;  {cloud}%</Typography>
            </div>
            <div style={subStyle}>
                <img src={smileimage} width={30} height={30}/>
                <Typography variant={'body2'}>Feel's like &nbsp; {feelslike}°{isFahrenheit ? "F" : "C"}</Typography>
            </div>


            <div style={{borderRadius: "22px", position: 'relative', marginTop: 24}}>
                <img src={cityimage} style={{width: "100%", borderRadius: "22px"}}/>
                <Typography
                    variant="h6"
                    style={{
                        color: "white",
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        textAlign:"center",
                        transform: 'translate(-50%,-50%)'
                    }}
                >
                    {currentCity} <br/> {currentCountry}
                </Typography>
            </div>
        </div>
    )
        ;
}
