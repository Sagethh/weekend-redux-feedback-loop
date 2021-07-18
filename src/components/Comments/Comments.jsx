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
    const previousPageHandler = () => { // handles sending the user to the last page
        history.push('/support');
    };
    const homeHandler = () => { // handles sending the user home
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
                  <br />
                  <br />
                  <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={previousPageHandler}>&lt; Previous Page</Button>
                  <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={homeHandler}>Return Home</Button>
                  <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={commentsHandler}>Next Page &gt;</Button>
            </header>
        </section>
    );
};

export default Comments;