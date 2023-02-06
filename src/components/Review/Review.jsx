import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Review = () => {

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    
    const dispatch = useDispatch();
    const history = useHistory();

    const postFeedback = () => {

        const feedbackArray = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comments
        }
    
        console.log(feedbackArray);

        axios.post('/feedback', feedbackArray)
        .then(response => {
            console.log('post request made', response);
            dispatch({ type: 'CLEAR_ALL'});
            history.push('/startfeedback');
        })
        .catch(error => {
            console.log('error with post', error);
        });
    }

    return (
        <div>
            <h1>Review:</h1>
            <p>Feeling: {feeling}</p>
            <p>Understanding: {understanding}</p> 
            <p>Suport: {support}</p>
            <p>Comments: {comments}</p>
            <br/>
            <br/>
            <button onClick={postFeedback}>Submit Feedback</button>
        </div>
    )
}


export default Review;