import {Card, Typography} from "@mui/material";
import NavigationSharpIcon from '@mui/icons-material/NavigationSharp';
import {lightGray, primaryColor} from "./WeatherApp";
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';

const SunRiseSunSet = ({riseTime, setTime, riseDiff, setDiff}) => {

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
                    <Typography variant={"subtitle2"} style={{opacity: 0.8}}>Sunrise & Sunset</Typography>
                    <SunComponent isUp={true} title={riseTime}  subtitle={riseDiff}/>
                    <SunComponent isUp={false} title={setTime} subtitle={setDiff}/>

                </div>
            </Card>
        </>
    )
}
const SunComponent = ({isUp, title, subtitle}) => {
    return (
        <>
            <div style={{display: "flex", columnGap: 8}}>
                <div style={{
                    display: "flex", justifyContent: "center", alignItems: "center",
                    height: 42, width: 42, borderRadius: "50%",
                    backgroundColor: "#FFDE4C",
                    border: `4px solid ${primaryColor}`,
                    color:"white"
                }}>
                    {isUp ? <ArrowUpwardSharpIcon/> : <ArrowDownwardSharpIcon/>}
                </div>
                <div>
                    <Typography variant={"body1"} fontWeight={"bold"}>{title}</Typography>
                    <Typography variant={"caption"}>{subtitle} </Typography>
                </div>
            </div>


        </>
    )
}
export {SunRiseSunSet}

