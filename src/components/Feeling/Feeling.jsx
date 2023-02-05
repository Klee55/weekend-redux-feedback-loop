import { useHistory } from "react-router-dom";

const Feeling = () => {

    const history = useHistory();

    return (
        <div>
            <h1>How are feeling today?</h1>
            <p>Feeling?</p>
            <input type="number"></input><button onClick={() => history.push('/understanding')}>NEXT</button>
        </div>
    )
}


export default Feeling;