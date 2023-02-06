import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Comments = () => {

    const comments = useSelector(store => store.comments);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.preventDefault();
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value});
    }

    return (
       <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments?</p>
            <input value={comments} onChange={handleChange} type="text"/>
            <button onClick={() => history.push('/review')}>NEXT</button>
        </div>
    )
}


export default Comments;