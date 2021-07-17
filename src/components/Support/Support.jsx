import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';

function Support() { // main function for this page
    const [support, setSupport] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();

    const handleSupport = (event) => { // function to handle the form input
        event.preventDefault(); // no default action allowed, bad
        if (support === '' || support > 10) { // if support is empty or greater than 10, tell the user to put something in and deny continuing
            alert('Please select a number between 1 - 10');
            return false;
        }
        else {
            console.log({support});
            dispatch({
                type: 'SET_SUPPORT',
                payload: support
            })
            history.push('/comments')
        }}

    return ( // what will be displayed on the DOM
        <section>
            <header>
                <h1>How well did you feel supported today?</h1>
                <input
                required 
                placeholder="1 - 10"
                value={support}
                onChange={(event) => setSupport(event.target.value)}>
                </input>
                <button onClick={handleSupport}>Next Page</button>
            </header>
        </section>
    );
};

export default Support; 