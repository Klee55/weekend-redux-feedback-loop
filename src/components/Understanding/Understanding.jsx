import { useHistory } from "react-router-dom";

const Understanding = () => {

    const history = useHistory();

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <p>Understanding?</p>
            <input type="number"></input><button onClick={() => history.push('/support')}>NEXT</button>
        </div>
    )
}


export default Understanding;