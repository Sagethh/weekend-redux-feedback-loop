import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';    

function Admin() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    const getData = () => {
        axios({
            method: 'GET',
            url: '/api/feedback'
        }) // get data from our server
        .then(response => {
            dispatch({
                type: "GET_FEEDBACK",
                payload: response.data
            });
        setData(response.data);
        });
    };
    useEffect(() => {
        getData();
    }, []);


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


    return (
        <TableContainer component={Paper}>
        <Table aria-label="customized table">
            <TableHead>
            <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell align="right">Feeling</StyledTableCell>
                <StyledTableCell align="right">Understanding</StyledTableCell>
                <StyledTableCell align="right">Support</StyledTableCell>
                <StyledTableCell align="right">Comments</StyledTableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {data.map((listItem) => (
                <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                    {listItem.name}
                </StyledTableCell>
                <StyledTableCell align="right">{listItem.feeling}</StyledTableCell>
                <StyledTableCell align="right">{listItem.understanding}</StyledTableCell>
                <StyledTableCell align="right">{listItem.support}</StyledTableCell>
                <StyledTableCell align="right">{listItem.comments}</StyledTableCell>
                </StyledTableRow>   
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    };

export default Admin;