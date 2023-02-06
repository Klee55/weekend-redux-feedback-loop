import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import StartFeedback from '../StartFeedback/StartFeedback';


function App() {
  
  // for testing and visual purposes
  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comments = useSelector(store => store.comments);

  const history = useHistory();




  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          <br/>
          <Link to='/startfeedback'>HOME</Link><br/>
          {/* for testing and visual purposes */}
          {/* <p>Feeling: {feeling}</p>
          <p>Understanding: {understanding}</p>
          <p>Support: {support}</p>
          <p>Comments: {comments}</p> */}
          {/* for testing and visual purposes */}
        </header>
        <div>
          {/* routes */}
          {/* <Route exact path='/'>
            <button onClick={() => history.push('/feeling')}>Start Feedback</button>
            </Route> */}
          <Route exact path= "/startfeedback" >
            <StartFeedback />
          </Route>
          <Route exact path="/feeling">
            <Feeling />
          </Route>
          <Route exact path="/understanding">
            <Understanding />
          </Route>
          <Route exact path="/support">
            <Support />
          </Route>
          <Route exact path="/comments">
            <Comments />
          </Route>
          <Route exact path="/review">
            <Review />
          </Route>

        </div>
      </div>
    </Router>
  );
}

export default App;
