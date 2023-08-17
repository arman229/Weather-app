import {DayWeekWeather} from "./DayWeekWeather";
import weatherimage from "../images/weather_image.jpg";
import React, {useRef, useState} from "react";
import {logDOM} from "@testing-library/react";
import {getDayoftheWeek, getJustTime} from "./TimeUtils";

const DayWeekWeatherContainer = ({isFahrenheit, isToday, weekTodayData}) => {
    const containerRef = useRef(null);
    const [isMouseDown, setMouseDown] = useState(false)
    const [lastPosition, setLastPosition] = useState(null)
    const [cursor, setCursor] = useState("grab")
    const onDragStart = (e) => {
        setMouseDown(true)
        setCursor("grabbing")
    }

    const onDragStop = (e) => {
        setLastPosition(null)
        setMouseDown(false)
        setCursor("grab")
    }
    const onDragMove = (e) => {
        e.preventDefault();
        if (isMouseDown) {
            if (lastPosition != null) {
                containerRef.current.scrollLeft -= e.clientX - lastPosition;
            }
            setLastPosition(e.clientX)
        }
    };
    const onTouchMove = (e) => {

        if (isMouseDown) {
            if (lastPosition != null) {
                containerRef.current.scrollLeft -= e.touches[0].clientX - lastPosition;
            }
            setLastPosition(e.touches[0].clientX)
        }
    };

    return (
        <>
            <div
                ref={containerRef}
                onTouchStart={onDragStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onDragStop}

                onMouseDown={onDragStart}
                onMouseMove={onDragMove}
                onMouseUp={onDragStop}

                onMouseLeave={onDragStop}
                style={{
                    paddingTop: 12,
                    paddingBottom: 12,
                    display: "flex",
                    columnGap: 10,
                    overflowX: "hidden",
                    width: "100%",
                    cursor: cursor
                }}>
                {
                    isToday ? weekTodayData[0].hour.map((datum,index) => <DayWeekWeather key={index} isFahrenheit={isFahrenheit}
                                                                                         day={getJustTime(datum.time)}
                                                                                         icon={datum.condition.icon}
                                                                                         maxTemp={isFahrenheit ? datum.temp_f : datum.temp_c}
                                                                                         minTemp={null}/>) : weekTodayData.map((datum,index) =>
                        <DayWeekWeather isFahrenheit={isFahrenheit}  key={index} day={getDayoftheWeek(datum.date)}
                                        icon={datum.day.condition.icon}
                                        maxTemp={isFahrenheit ? datum.day.maxtemp_f : datum.day.maxtemp_c}
                                        minTemp={isFahrenheit ? datum.day.mintemp_f : datum.day.mintemp_c}/>)

                }


            </div>


        </>
    )
}
export {DayWeekWeatherContainer}