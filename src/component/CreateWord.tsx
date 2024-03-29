import useFetch from "../hooks/useFetch";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";

interface Day {
    id: number,
    day: number
}

export default function CreateWord() {
    const days: Day[] = useFetch(`http://localhost:3001/days`);
    const navigate = useNavigate();

    function onSubmit(e: React.FormEvent) {
        e.preventDefault();

        fetch(`http://localhost:3001/words`,
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    day: dayRef.current!.value,
                    eng: engRef.current!.value,
                    kor: korRef.current!.value,
                    isDone: false
                })
            }
        ).then(res => {
            if (res.ok) {
                alert(`생성이 완료 되었습니다.`);
                navigate(`/day/${dayRef.current!.value}`);
            }
        });
    }

    const engRef = useRef<HTMLInputElement>(null);
    const korRef = useRef<HTMLInputElement>(null);
    const dayRef = useRef<HTMLSelectElement>(null);

    return (
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label htmlFor="input_en">Eng </label>
                <input id={`input_en`} type="text" placeholder={'computer'} ref={engRef}/>
            </div>
            <div className="input_area">
                <label htmlFor="input_ko">Kor </label>
                <input id={`input_ko`} type="text" placeholder={'컴퓨터'} ref={korRef}/>
            </div>
            <div className="input_area">
                <label htmlFor="sel_day">Day </label>
                <select id="sel_day" ref={dayRef}>
                    {days.map(day => {
                        return <option key={day.id} value={day.day}>{day.day}</option>
                    })}
                </select>
            </div>
            <button>저장</button>
        </form>
    )
}