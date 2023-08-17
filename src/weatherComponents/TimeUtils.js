export const getDayoftheWeek = (timeString) => {
    const localDateTime = new Date(timeString);
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDayName = weekDays[localDateTime.getDay()];
    return weekDayName;
}

export const getJustTime = (timeString) => {
    const dateObject = new Date(timeString);
    // const time = localDateTime.toLocaleTimeString("en-US", {hour: 'numeric', minute: 'numeric', hour12: false});
    const hours = String(dateObject.getHours()).padStart(2, '0');
    const minutes = String(dateObject.getMinutes()).padStart(2, '0');

  let time=`${hours}:${minutes}`
    return time
}