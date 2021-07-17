import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Feeling() {
    const [feeling, setFeeling] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleFeeling = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        if (feeling === '' || feeling > 10) { // if feeling is empty or greater than 10, tell the user to put something in and deny continuing
            alert('Please select a number between 1 - 10');
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
                  <input
                  required 
                  placeholder="How are you feeling?"
                  value={feeling}
                  onChange={(event) => setFeeling(event.target.value)}>
                  </input>
                  <button onClick={handleFeeling}>Next Page</button>
              </header>
          </section>
      );
};

export default Feeling;