import {Card, Typography} from "@mui/material";
import {lightGray, primaryColor} from "./WeatherApp";

const Pressurecomponent = ({pressure}) => {
    let res =   pressure


    function getPressureInfo(pressure) {
        if (pressure >= 30 && pressure <= 32) {
            return "Good 👍";
        } else if (pressure >= 29 && pressure < 30) {
            return "Low ⬇️";
        } else if (pressure > 32 && pressure <= 34) {
            return "High ⬆️";
        } else {
            return "Extreme 🌪️";
        }
    }

    return (
        <>
            <Card style={{borderRadius: 12, height: "180px" }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    height: "inherit",
                    padding: "0px 16px"
                }}>
                    <Typography variant={"subtitle2"} style={{opacity: 0.8}}>Pressure</Typography>

                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <Typography variant={"h4"} fontWeight={"bold"}>{pressure} </Typography>
                        <div style={{
                            height: 80,
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
                        <Typography variant={"body2"} fontWeight={"bold"}> {getPressureInfo()}</Typography>
                    </div>

                </div>
            </Card>
        </>
    )
}
export {Pressurecomponent}

