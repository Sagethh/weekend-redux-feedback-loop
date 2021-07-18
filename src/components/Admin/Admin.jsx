import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';  
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

function Admin() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const history = useHistory();
    const homeHandler = () => {
        history.push('/');
    };

    const getData = () => { // function to retrieve the data from the database
        axios({
            method: 'GET',
            url: '/api/feedback'
        })
        .then(response => {
            dispatch({
                type: "GET_FEEDBACK",
                payload: response.data
            });
        setData(response.data); // sets data we received so we can use it
        })
        .catch(error =>{
            console.log(error);
        })
    };
    useEffect(() => { // get data on page load
        getData();
    }, []);

    const checkFlagged = (item, id) => { // function for checking flagged state
        console.log(item)
        console.log(id.flagged);
        // test console logs
        axios({
            method: 'PUT',
            url: `/api/feedback/${item}`
        })
        .then(response => {
            console.log(response.flagged);
            getData();
        })
        .catch(error => {
            console.log(error);
        });
    };

    const deleteItem = (item) => { // function to delete the selected item
        console.log(item);
        axios({
            method: 'DELETE',
            url: `/api/feedback/${item}`
        })
        .then(response => {
            console.log(response.data);
            getData();  // refresh data after we delete an item
        })
        .catch(error => {
            console.log(error);
        });
    };

     const StyledTableCell = withStyles((theme) => ({ // START OF MATERIALUI STYLING
        head: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
      }))(TableCell);
      const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }))(TableRow); // END OF MATERIALUI STYLING

    return ( // what will be displayed on the DOM
        <TableContainer component={Paper}>
        <Table aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Survey ID</StyledTableCell>
                <StyledTableCell align="right">Feeling</StyledTableCell>
                <StyledTableCell align="right">Understanding</StyledTableCell>
                <StyledTableCell align="right">Support</StyledTableCell>
                <StyledTableCell align="right">Comments</StyledTableCell>
                <StyledTableCell align="right">Needs Review?</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((listItem) => (
                <StyledTableRow key={listItem.id}>
                    <StyledTableCell component="th" scope="row">
                        {listItem.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">{listItem.feeling}</StyledTableCell>
                    <StyledTableCell align="right">{listItem.understanding}</StyledTableCell>
                    <StyledTableCell align="right">{listItem.support}</StyledTableCell>
                    <StyledTableCell align="right">{listItem.comments}</StyledTableCell>
                    <StyledTableCell align="right"><Checkbox color="primary" checked={listItem.flagged} onChange={() => checkFlagged(listItem.id, listItem)} inputProps={{'aria-label': 'secondary checkbox'}}/></StyledTableCell>
                    <StyledTableCell align="right"><Button variant="contained" color="secondary" className="delete" onClick={() => deleteItem(listItem.id)} startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                    </StyledTableCell>
                </StyledTableRow>   
            ))}
            </TableBody>
        </Table>
        <Button style={{width: '170px', height: '42px'}} variant="contained" color="primary" onClick={homeHandler}>Return Home</Button>
        </TableContainer>
    );
};

export default Admin;