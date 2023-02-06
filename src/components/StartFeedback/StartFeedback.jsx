import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const StartFeedback = () => {

    const history = useHistory();

    return (
        
        <button onClick={() => history.push('/feeling')}>START FEEDBACK</button>
        // <Link className="startfeed-Back-link" to='/feeling'> Start Feedback</Link>
    )
}

export default StartFeedback;