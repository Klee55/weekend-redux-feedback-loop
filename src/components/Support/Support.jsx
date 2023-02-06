import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Support = () => {

    const support = useSelector(store => store.support);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value});
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <p>Support?</p>
            <input value={support} onChange={handleChange} type="number"/>
            <button onClick={() => history.push('/comments')}>NEXT</button>
        </div>
    )
}


export default Support;