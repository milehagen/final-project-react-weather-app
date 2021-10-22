import React from "react";

export default function FormattedDate({date}){
    let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    let day= days[date.getDay()];
    console.log(days);
    let hour= date.getHours();
    let minutes= date.getMinutes();
    return <div>{day}, {hour}:{minutes}</div>
}