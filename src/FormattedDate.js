import React from "react";

export default function FormattedDate({date}){
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day= days[date.getDay()];
    let hour= date.getHours();
    if (hour<=9){ hour =`0${hour}`}
    let minutes= date.getMinutes();
        if (minutes<=9){ minutes =`0${minutes}`}

    return <div>{day}, {hour}:{minutes}</div>
}