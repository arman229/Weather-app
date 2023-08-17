import {Card, CardContent, Typography} from "@mui/material";

const DayWeekWeather = ({isFahrenheit, day, icon, minTemp, maxTemp}) => {
    return (
        <>
            <Card style={{display: "inline-block", borderRadius: 12, minWidth: 100}}>
                <CardContent
                    style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <Typography style={{userSelect: "none"}} variant={"body1"}>{day}</Typography>
                    <img src={icon} draggable={"false"} style={{userSelect: "none", marginTop: 8, marginBottom: 8}}
                         height={40} width={40}/>

                    <Typography style={{userSelect: "none"}} variant={"body1"}>{maxTemp}{"° "}
                        {minTemp && <span style={{opacity: 0.6}}>{minTemp}{"° "}</span>}
                    </Typography>


                </CardContent>
            </Card>
        </>
    )


}
export {DayWeekWeather}


