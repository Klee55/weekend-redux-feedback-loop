import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import { useSelector } from 'react-redux';


function App() {
  
  // for testing and visual purposes
  const feeling = useSelector(store => store.feeling);
  const understanding = useSelector(store => store.understanding);
  const support = useSelector(store => store.support);
  const comments = useSelector(store => store.comments);




  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
          <Link to='/'>HOME</Link><br/>
          {/* for testing and visual purposes */}
          <p>Feeling: {feeling}</p>
          <p>Understanding: {understanding}</p>
          <p>Support: {support}</p>
          <p>Comments: {comments}</p>
          {/* for testing and visual purposes */}
        </header>
        <div>
          {/* routes */}
          <Link to='/feeling'>GO</Link>
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

        </div>
      </div>
    </Router>
  );
}

export default App;
