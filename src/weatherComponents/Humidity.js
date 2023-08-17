import {Card, Typography} from "@mui/material";
import {lightGray, primaryColor} from "./WeatherApp";

const Humidity = ({humidity}) => {
    let res = (56 / 100) * humidity
    function getHumidityInfo() {
        if (humidity >= 70) {
            return "High 😓";
        } else if (humidity >= 40) {
            return "Moderate 😊";
        } else {
            return "Low 🙂";
        }
    }


    return (
        <>
            <Card style={{borderRadius: 12, height: "180px"}}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    height: "inherit",
                    padding: "0px 16px"
                }}>
                    <Typography variant={"subtitle2"} style={{opacity: 0.8}}>Humidity</Typography>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography variant={"h4"} fontWeight={"bold"}>{humidity}<sup
                            style={{fontSize: 16}}>%</sup></Typography>
                        <div style={{
                            height: '80px',
                            width: 30,
                            border: `2px solid ${lightGray}`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            paddingTop: 4,
                            paddingBottom: 4,
                            borderRadius: 30
                        }}>
                            <div style={{
                                height: 24,
                                width: 24,
                                transform: `translateY(-${res}px)`,
                                backgroundColor: "blue",
                                textAlign: "center",
                                borderRadius: "50%"
                            }}></div>
                        </div>
                    </div>

                    <div style={{display: "flex", alignItems: "center", columnGap: 10}}>
                        <Typography variant={"body2"} fontWeight={"bold"}> {getHumidityInfo()}</Typography>
                    </div>

                </div>
            </Card>
        </>
    )
}
export {Humidity}

