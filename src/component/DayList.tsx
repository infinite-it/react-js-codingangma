import {Link} from 'react-router-dom'
import dummy from "../db/data.json";
import {useEffect, useState} from "react";

export default function DayList() {
    // console.log(dummy);
    const [days, setDays] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/days`)
            .then(res => res.json())
            .then(data => setDays(data));
    }, []);

    return (
        <ul className="list_day">
            {dummy.days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}