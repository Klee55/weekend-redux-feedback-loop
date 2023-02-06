import { useHistory } from "react-router-dom";

const StartFeedback = () => {

    const history = useHistory();

    return (

        <button onClick={() => history.push('/feeling')}>START FEEDBACK</button>
    )
}

export default StartFeedback;