import {Card, Typography} from "@mui/material";
import NavigationSharpIcon from '@mui/icons-material/NavigationSharp';
import {lightGray} from "./WeatherApp";

const WindStatus = ({wind_speed, wind_direction, wind_degree}) => {

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
                    <Typography variant={"subtitle2"} style={{opacity: 0.8}}>Wind Status</Typography>
                    <Typography variant={"h3"} fontWeight={"bold"}>{wind_speed}
                        <span
                            style={{fontSize: 16, fontWeight: "lighter"}}>km/h </span></Typography>
                    <div style={{display: "flex", alignItems: "center", columnGap: 10}}>
                        <div style={{
                            borderRadius: "50%",
                            border: `1px solid ${lightGray}`,
                            display:"flex",
                            justifyContent:"center",
                            position:"relative"
                        }}>
                            <span style={{position:"absolute",top:-8,fontSize:12,fontWeight:"bolder"}}>N</span>
                            <NavigationSharpIcon  style={{
                                padding: 12,
                                transform: `rotate(${wind_degree}deg)`
                            }}/>
                        </div>

                        <Typography variant={"button"} fontWeight={"bold"}> {wind_direction}</Typography>
                    </div>

                </div>
            </Card>
        </>
    )


}
export {WindStatus}

