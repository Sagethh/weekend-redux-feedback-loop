import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Understanding() { // main function for this page
    const [understanding, setUnderstanding] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleUnderstanding = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        if (understanding === '' || understanding > 10) { // if understanding is empty or greater than 10, tell the user to put something in and deny continuing
            alert('Please select a number between 1 - 10');
            return false;
        }
        else {
            console.log({}); // check to make sure we are getting what we want
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
                <h1>How well did you understand the material today?</h1>
                <input
                type='number'
                required 
                placeholder="1 - 10"
                value={understanding}
                onChange={(event) => setUnderstanding(event.target.value)}>
                </input>
                <button onClick={handleUnderstanding}>Next</button>
            </header>
        </section>
    );
};

export default Understanding;