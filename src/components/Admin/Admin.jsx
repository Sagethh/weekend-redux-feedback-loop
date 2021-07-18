import React from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';    

function Admin() {
    const dispatch = useDispatch();
    let rows = [];
    axios({
        method: 'GET',
        url: '/api/feedback'
    })
    .then(response => {
        dispatch({
            type: "GET_FEEDBACK",
            payload: response.data
        });
        for (let n = 0; n < response.data.length; n++) {
            console.log(response.data[n].name, response.data[n].feeling, response.data[n].understanding, response.data[n].support, response.data[n].comments);
            rows.push(createData(response.data[n].name, response.data[n].feeling, response.data[n].understanding, response.data[n].support, response.data[n].comments),);
            console.log(rows);
        }
    });


    const StyledTableCell = withStyles((theme) => ({
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
      }))(TableRow);

    function createData(name, feeling, understanding, support, comments) {
        return { name, feeling, understanding, support, comments };
      }
      
      const fuck = () => {
        (rows.map((row) => (
              console.log(row.feeling)
          )))
      }
    

    return (
        <TableContainer component={Paper}>
            <button onClick={fuck}>fuck</button>
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
            {rows.map((row) => (
                <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                    {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.feeling}</StyledTableCell>
                <StyledTableCell align="right">{row.understanding}</StyledTableCell>
                <StyledTableCell align="right">{row.support}</StyledTableCell>
                <StyledTableCell align="right">{row.comments}</StyledTableCell>
                </StyledTableRow>   
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
    };

export default Admin;