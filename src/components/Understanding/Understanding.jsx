import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Understanding = () => {

    const understanding = useSelector(store => store.understanding);
    const history = useHistory();
    const dispatch = useDispatch();
    // const [feeling, setFeeling] = useState('');

    // alert if input is empty
    const inputValidation = () => {
        if(understanding === "") {
            return alert('feedback cannot be empty');    
        } 
        history.push('/support');
    }

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value});
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
            <input value={understanding} onChange={handleChange} type="number"></input>
            <button onClick={inputValidation}>NEXT</button>
        </div>
    )
}


export default Understanding;