import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function Comments() {
    const [comments, setComments] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const numberHandler = [{value: 0,label: "0"},{value: 1,label: "1"},{value: 2,label: "2"},{value: 3,label: "3"},{value: 4,label: "4"},{value: 5,label: "5"},{value: 6,label: "6"},{value: 7,label: "7"},{value: 8,label: "8"},{value: 9,label: "9"},{value: 10,label: "10"},];
    // big long thingy for materialUI, gives options 1-10 for the dropdown
    const previousPageHandler = () => {
        history.push('/support');
    };
    const homeHandler = () => {
        history.push('/');
    };


    const commentsHandler = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        console.log(comments); // otherwise, put it though to the main reducer and push the user to the next page
        dispatch({
            type: 'SET_COMMENTS',
            payload: comments
        });
        history.push('/review');
    };

      return ( // what will be displayed on the DOM
          <section>
              <header>
                  <h1>Any comments?</h1>
                  <TextField
                        id="standard-multiline-flexible"
                        label="Comments"
                        multiline
                        maxRows={4}
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
                        />
                  <br></br>
                  <br></br>
                  <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={previousPageHandler}>&lt; Previous Page</Button>
                  <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={homeHandler}>Return Home</Button>
                  <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={commentsHandler}>Next Page &gt;</Button>
              </header>
          </section>
      );
};

export default Comments;