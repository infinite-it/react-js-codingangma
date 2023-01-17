import {useParams} from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

interface Word {
    id: number,
    day: number,
    eng: string,
    kor: string,
    isDone: boolean
}

export default function Day() {
    let {day} = useParams();
    day = day ?? "1";
    const words: Word[] = useFetch(`http://localhost:3001/words?day=${day}`);
    // const wordList = typeof day === 'string' ? dummy.words.filter(word => word.day === Number(day)) : dummy.words;
    // const [words, setWords] = useState<Word[]>([]);
    // useEffect(() => {
    //     fetch(`http://localhost:3001/words?day=${day}`)
    //         .then(res => res.json())
    //         .then(data => setWords(data));
    // }, [day]);

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                {words.map(word => (
                    <Word key={word.id} word={word}/>
                ))}
                </tbody>
            </table>
        </>
    )
}