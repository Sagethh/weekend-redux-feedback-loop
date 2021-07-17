import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function Feeling() {
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const numberHandler = [{value: 0,label: "0"},{value: 1,label: "1"},{value: 2,label: "2"},{value: 3,label: "3"},{value: 4,label: "4"},{value: 5,label: "5"},{value: 6,label: "6"},{value: 7,label: "7"},{value: 8,label: "8"},{value: 9,label: "9"},{value: 10,label: "10"},];
    // big long thingy for materialUI, gives options 1-10 for the dropdown

    const feelingHandler = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        if (feeling === '') { // if feeling is empty or greater than 10, tell the user to put something in and deny continuing
            alert('Please select a number');
            setFeeling(''); // clears input
            return false;
        }
        else {
            console.log(feeling); // otherwise, put it though to the main reducer and push the user to the next page
            dispatch({
                type: 'SET_FEELING',
                payload: feeling
            });
            history.push('/understanding');
        }
    };

      return ( // what will be displayed on the DOM
          <section>
              <header>
                  <h1>How are you feeling today?</h1>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Rating"
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
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
                  <br></br>
                  <br></br>
                  <Button variant="contained" color="primary" onClick={feelingHandler}>Next Page</Button>
              </header>
          </section>
      );
};

export default Feeling;