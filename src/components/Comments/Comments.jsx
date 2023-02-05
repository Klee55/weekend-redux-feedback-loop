import { useHistory } from "react-router-dom";

const Comments = () => {

    const history = useHistory();

    return (
       <div>
            <h1>Any comments you want to leave?</h1>
            <p>Comments?</p>
            <input type="number"></input><button onClick={() => history.push('/')}>NEXT</button>
        </div>
    )
}


export default Comments;