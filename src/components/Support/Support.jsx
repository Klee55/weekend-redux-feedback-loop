import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Support = () => {

    const support = useSelector(store => store.support);
    const history = useHistory();
    const dispatch = useDispatch();

    // alert if input is empty
    const inputValidation = () => {
        if(support === "") {
            return alert('feedback cannot be empty');    
        } 
        history.push('/comments');
    }

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value});
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <p>Support?</p>
            <input value={support} onChange={handleChange} type="number"/>
            <button onClick={inputValidation}>NEXT</button>
        </div>
    )
}


export default Support;