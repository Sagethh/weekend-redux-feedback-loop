import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Home from '../Home/Home';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

function App() {

  const getFeedback = () => { // main function to get feedback from data
    axios({ // axios GET request
      method: 'GET',
      url: '/api/feedback'
    })
    .then(response => { // after getting data, set the payload to the response given
      dispatchEvent({
        type: 'GET_FEEDBACK',
        payload: response.data
      });
    })
    .catch(error => { // catch any errors
      console.log(error);
    });
  };
 
  return ( // what to show up on DOM, also includes the routing that will be needed
    <Router>                                   
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
        <Route path="/" exact component={Home} />
        <Route path="/feeling"  component={Feeling} /> 
        <Route path="/understanding" component={Understanding} />
        <Route path="/support" component={Support} /> 
        <Route path="/comments" component={Comments} />
        <Route path="/review"  component={Review} />
        <Route path="/success" component={Success} />
        <Route path="/admin" component={Admin} />
    </div>
    </Router>
  );
};

export default App;