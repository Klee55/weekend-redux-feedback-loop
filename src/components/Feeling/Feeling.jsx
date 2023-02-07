import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Feeling = () => {
    
    const feeling = useSelector(store => store.feeling);
    const history = useHistory();
    const dispatch = useDispatch();
    // const [feeling, setFeeling] = useState('');

    // alert if input is empty
    const inputValidation = () => {
        if(feeling === "") {
            return alert('feedback cannot be empty');    
        } 
        history.push('/understanding');
    }

    const handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        dispatch({ type: 'SET_FEELING', payload: event.target.value});
    }



    return (
        <div>
            <h1>How are feeling today?</h1>
            <p>Feeling?</p>
            <input value={feeling} onChange={handleChange} type="number" required="number"/>
            <button onClick={inputValidation}>NEXT</button>
            
        </div>
    )
}


export default Feeling;