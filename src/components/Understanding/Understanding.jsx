import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function Understanding() { // main function for this page
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const numberHandler = [{value: 0,label: "Select An Option"},{value: 1,label: "1"},{value: 2,label: "2"},{value: 3,label: "3"},{value: 4,label: "4"},{value: 5,label: "5"},{value: 6,label: "6"},{value: 7,label: "7"},{value: 8,label: "8"},{value: 9,label: "9"},{value: 10,label: "10"},];
    // big long thingy for materialUI, gives options 1-10 for the dropdown
    const previousPageHandler = () => { // handles sending the user to the last page
        history.push('/feeling');
    };
    const homeHandler = () => { // handles sending the user home
        history.push('/');
    };

    const understandingHandler = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        if (understanding === '') { // if understanding, tell the user to put something in and deny continuing
            alert('Please select a number');
            setUnderstanding('') // clears input
            return false;
        }
        else {
            console.log(understanding); // check to make sure we are getting what we want
            dispatch({
                type: 'SET_UNDERSTANDING',
                payload: understanding
            });
            history.push('/support'); // push the user along to the next page
        };
    };

    return ( // what will be displayed on the DOM
        <section>
            <header>
                <h1>How well did you understand todays content?</h1>
                <TextField
                  id="outlined-select-currency-native"
                  select
                  label="Rating"
                  value={understanding}
                  onChange={(event) => setUnderstanding(event.target.value)}
                  SelectProps={{
                      native: true,
                  }}
                  variant="outlined"
                  >
                          {numberHandler.map((option) => (
                              <option key={option.value} value={option.value}>
                              {option.label}
                              </option>
                          ))}
                  </TextField>
                <br />
                <br />
                <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={previousPageHandler}>&lt; Previous Page</Button>
                <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={homeHandler}>Return Home</Button>
                <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={understandingHandler}>Next Page &gt;</Button>
            </header>
        </section>
    );
};

export default Understanding;