import {Card, Typography} from "@mui/material";

const Visibility = ({visibility}) => {
    function getVisibilityCategory(visibilityInKm) {
        if (visibilityInKm > 10) {
            return "Excellent 😎";
        } else if (visibilityInKm > 5) {
            return "Good 😊";
        } else if (visibilityInKm > 1) {
            return "Moderate 😐";
        } else if (visibilityInKm > 0.5) {
            return "Poor 😕";
        } else {
            return "Very Poor 😟";
        }
    }


    return (
        <>
            <Card style={{borderRadius: 12, height: "180px",  }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    height: "inherit",
                    padding: "0px 16px"
                }}>
                    <Typography variant={"subtitle2"} style={{opacity: 0.8}}>Visibility</Typography>
                    <Typography variant={"h3"} fontWeight={"bold"}>{visibility} <span
                        style={{fontSize: 16, fontWeight: "lighter"}}>km </span></Typography>
                    <div style={{display: "flex", alignItems: "center", columnGap: 10}}>

                        <Typography variant={"body2"} fontWeight={"bold"}> {getVisibilityCategory(visibility)}</Typography>
                    </div>

                </div>
            </Card>
        </>
    )
}
export {Visibility}

