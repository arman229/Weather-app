import {Typography} from "@mui/material";
import React from "react";

const WeatherAppBar = ({isToday, isFahrenheit, onToggleDayWeek, onToggleTemp}) => {
    let baseLabelStyle = {
        display: "inline",
        padding: 4,
        cursor: "pointer"
    }
    let labelStyleSelected = {
        borderBottom: "2px solid black",
        opacity: 1,
        ...baseLabelStyle
    };
    let labelStyleUnselected = {
        borderBottom: "0px solid black",
        opacity: 0.7,
        ...baseLabelStyle
    };

    let tempStyleSelected = {
        display: "inline-block",
        backgroundColor: "black",
        color: "white",
        borderRadius: "50%",
        padding:"12px 14px 12px 14px",
        cursor: "pointer"
    };
    let tempStyleUnSelected = {
        display: "inline-block",
        backgroundColor: "white",
        color: "black",
        borderRadius: "50%",
        padding:"12px 14px 12px 14px",
        cursor: "pointer"
    };


    return (<>
        <div style={{display: "flex", justifyContent: "space-between",marginBottom:"10px"}}>
            <div>
                <Typography style={isToday ? labelStyleSelected : labelStyleUnselected}
                            variant={"subtitle1"} onClick={() => {
                    onToggleDayWeek(true)
                }}>Today</Typography>
                <div style={{display: "inline-block", width: 8, height: 1}}></div>
                <Typography style={!isToday ? labelStyleSelected : labelStyleUnselected}
                            variant={"subtitle1"} onClick={() => {
                    onToggleDayWeek(false)
                }}>Week</Typography>
            </div>
            <div>
                <span onClick={() => {
                    onToggleTemp(false)
                }} style={!isFahrenheit ? tempStyleSelected : tempStyleUnSelected}>°C</span>
                <div style={{display: "inline-block", width: 8, height: 1}}></div>
                <span onClick={() => {
                    onToggleTemp(true)
                }} style={isFahrenheit ? tempStyleSelected : tempStyleUnSelected}>°F</span>
            </div>

        </div>

    </>)
}

export {WeatherAppBar}
