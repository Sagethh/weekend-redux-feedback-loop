import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Review() {
    const feedbackReducer = useSelector( state => state.feedbackReducer);
    const history = useHistory();

    const reviewHandler = () => {
        axios({
            method: 'POST',
            url: '/api/feedback',
            data: feedbackReducer
        })
        .then(response => {
            console.log(response);
            history.push('/success');
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
        <Card variant="outlined">
        <CardContent>
          <Typography variant="h3" component="h2">
            <u>Survey Results for {feedbackReducer.name}</u>
          </Typography>
          <br />
          <Typography variant="h6   " component="h2">
            Feeling (0 - 10): <b><u>{feedbackReducer.feeling}</u></b>
            <br />
            Understanding (0 - 10): <b><u>{feedbackReducer.understanding}</u></b>
            <br />
            Supported (0 - 10): <b><u>{feedbackReducer.support}</u></b>
            <br />
            Comments: <b><u>{feedbackReducer.comments}</u></b>
          </Typography>
        </CardContent>
        <CardActions>
            <Button variant="contained" color="primary" onClick={reviewHandler}>Submit</Button>
        </CardActions>
      </Card>
      );
    }

export default Review;