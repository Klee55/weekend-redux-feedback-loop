import { useHistory } from "react-router-dom";

const Support = () => {

    const history = useHistory();

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <p>Support?</p>
            <input type="number"></input><button onClick={() => history.push('/comments')}>NEXT</button>
        </div>
    )
}


export default Support;