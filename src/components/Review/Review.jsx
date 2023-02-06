import { useSelector } from "react-redux";

const Review = () => {

    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    return (
        <div>
            <h1>Review:</h1>
            <p>Feeling: {feeling}</p>
            <p>Understanding: {understanding}</p> 
            <p>Suport: {support}</p>
            <p>Comments: {comments}</p>
            <br/>
            <br/>
            <button>Submit Feedback</button>
        </div>
    )
}


export default Review;