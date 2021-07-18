import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

function Success() {
    const history = useHistory();
    const successHandler = () => { // handles sending the user home
        history.push('/');
    };

    return ( // what will be displayed on the DOM
        <section>
            <header>
                <h1>
                    SUCCESS!
                </h1>
            </header>
            <p>Your survey has been submitted</p>
            <p>Click on the button below to return Home</p>
            <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={successHandler}>Home</Button>
        </section>
    );
};

export default Success;