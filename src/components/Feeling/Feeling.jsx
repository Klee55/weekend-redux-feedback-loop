import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const Feeling = () => {
    
    const feeling = useSelector(store => store.feeling);
    const history = useHistory();
    const dispatch = useDispatch();
    // const [feeling, setFeeling] = useState('');


    const handleChange = (event) => {
        event.preventDefault();
        // setFeeling(event.target.value);
        dispatch({ type: 'SET_FEELING', payload: event.target.value});
    }



    return (
        <div>
            <h1>How are feeling today?</h1>
            <p>Feeling?</p>
            <input value={feeling} onChange={handleChange} type="number" />
            <button onClick={() => history.push('/understanding')}>NEXT</button>
            
        </div>
    )
}


export default Feeling;