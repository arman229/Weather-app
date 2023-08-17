import {Card, CardContent, Typography} from "@mui/material";
import {useEffect, useRef} from "react";
import {lightGray, primaryColor} from "./WeatherApp";


const UVIndex = ({uvIndex}) => {
    const finalUvIndex = Math.max(0, Math.min(uvIndex, 14));
    let angelValue = (1 / 18) * (finalUvIndex + 18)
    let canvasRef = useRef(null)
    function degreesToRadians(degrees) {
        return degrees * (Math.PI / 180);
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const centerX = canvas.width / 2;
        const centerY = canvas.height;
        const radius = 64;
        const startAngle = Math.PI;
        const anticlockwise = false;
        ctx.strokeStyle = "#f3f3f3";
        ctx.lineWidth = 10;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, startAngle, 2 * Math.PI, anticlockwise);
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 20;
        ctx.strokeStyle = primaryColor;
        ctx.arc(centerX, centerY, radius, startAngle, angelValue * Math.PI, anticlockwise);
        ctx.stroke();
        ctx.font = "12px Arial";
        ctx.fillStyle = lightGray
        ctx.fillText("3", centerX + (radius + 20) * Math.cos(degreesToRadians(210)), centerY + (radius + 20) * Math.sin(degreesToRadians(210)));
        ctx.fillText("6", centerX + (radius + 20) * Math.cos(degreesToRadians(240)), centerY + (radius + 20) * Math.sin(degreesToRadians(240)));
        ctx.fillText("9", centerX + (radius + 20) * Math.cos(degreesToRadians(270)), centerY + (radius + 20) * Math.sin(degreesToRadians(270)));
        ctx.fillText("12", centerX + (radius + 8) * Math.cos(degreesToRadians(300)), centerY + (radius + 20) * Math.sin(degreesToRadians(300)));
        ctx.fillText("15", centerX + (radius + 8) * Math.cos(degreesToRadians(330)), centerY + (radius + 20) * Math.sin(degreesToRadians(330)));

        ctx.fillStyle = "black"
        ctx.font = "40px Arial";
        ctx.fillText(finalUvIndex, centerX - (finalUvIndex > 9 ? 20 : 10), centerY)

    }, [])
    return (
        <>
            <Card style={{display: "flex",justifyContent:"center", borderRadius: 12, height: 180 }}>
                <CardContent>
                    <Typography variant={"subtitle2"} style={{opacity: 0.8}}>UV Index </Typography>
                    <canvas ref={canvasRef} height={100} width={148}></canvas>
                </CardContent>
            </Card>
        </>
    )


}
export {UVIndex}


