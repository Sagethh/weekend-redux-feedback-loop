import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function Support() { // main function for this page
    const [support, setSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const numberHandler = [{value: 0,label: "Select An Option"},{value: 1,label: "1"},{value: 2,label: "2"},{value: 3,label: "3"},{value: 4,label: "4"},{value: 5,label: "5"},{value: 6,label: "6"},{value: 7,label: "7"},{value: 8,label: "8"},{value: 9,label: "9"},{value: 10,label: "10"},];
    // big long thingy for materialUI, gives options 1-10 for the dropdown
    const previousPageHandler = () => {
        history.push('/understanding');
    };
    const homeHandler = () => {
        history.push('/');
    };

    const supportHandler = (event) => { // function to handle the form input
            console.log({support});
            dispatch({
                type: 'SET_SUPPORT',
                payload: support
            })
            history.push('/comments')
        }

        return ( // what will be displayed on the DOM
            <section>
                <header>
                    <h1>How well did you feel supported today?</h1>
                    <TextField
                      id="outlined-select-currency-native"
                      select
                      label="Rating"
                      value={support}
                      onChange={(event) => setSupport(event.target.value)}
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
                    <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={previousPageHandler}>&lt; Previous Page</Button>
                    <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={homeHandler}>Return Home</Button>
                    <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={supportHandler}>Next Page &gt;</Button>
                </header>
            </section>
        );
};

export default Support; 