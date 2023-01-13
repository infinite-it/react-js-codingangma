import {Link} from 'react-router-dom'
import useFetch from "../hooks/useFetch";

interface Day {
    id: number,
    day: number
}

export default function DayList() {
    // console.log(dummy);
    const days: Day[] = useFetch(`http://localhost:3001/days`);
    // const [days, setDays] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:3001/days`)
    //         .then(res => res.json())
    //         .then(data => setDays(data));
    // }, []);

    return (
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id}>
                    <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}