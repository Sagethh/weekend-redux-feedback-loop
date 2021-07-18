import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function Home() {
    const [feedback, setFeedback] = useState([]);
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        getFeedback();
    }, []);

    const nameHandler = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        if (name === '') { // if feeling is empty or greater than 10, tell the user to put something in and deny continuing
            alert('Please enter your name');
            setName(''); // clears input
            return false;
        }
        else {
            console.log(name); // otherwise, put it though to the main reducer and push the user to the next page
            dispatch({
                type: 'SET_NAME',
                payload: name
            });
            history.push('/feeling');
        }
    };

  const getFeedback = () => {
      axios({
          method: 'GET',
          url: '/api/feedback'
      })
      .then(response => {
          console.log(response.data);
          setFeedback(response.data);
      })
      .catch(error => {
          console.log(error);
      });
    };

    return(
        <section>
            <h2>
                Welcome, please start by     entering your name
            </h2>
            <TextField
                id="standard-multiline-flexible"
                label="Name"
                maxRows={4}
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <br />
            <br />
      <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={nameHandler}>Start</Button>
    </section>
    )
} 
export default Home; // end of axios get