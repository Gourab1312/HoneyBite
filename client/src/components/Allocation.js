import React, { useEffect, useState, useContext } from 'react'
import Box from '@mui/material/Box';
import sxprop from './sxStyle';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TransactionContext } from "../context/TransactionContext";
import Button from '@mui/material/Button';


const Allocation = ({ proj }) => {
  const {
    currentAccount
  } = useContext(TransactionContext);
  const [List, setList] = useState([])
  const getAllocatedProject = async () => {
    let allocationList = await axios.post('http://localhost:5000/getallocation', {
      walletAddress: currentAccount,
      token_name: proj.tkn_name
    })
    console.log(proj.tkn_name)
    console.log(allocationList)
    setList(allocationList.data.investedProj)
  }
  useEffect(() => {
    getAllocatedProject()
  }, [])

  return (
    <Box sx={sxprop.subboxsx}>Your Allocation
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Venture Name</TableCell>
              <TableCell align="right">Date Brought</TableCell>
              <TableCell align="right">Invested</TableCell>
              <TableCell align="right">Token Gain</TableCell>
              <TableCell align="right">Claim Token</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {List.map((value, index) => {
              const claimtokenHandle = () => {
                axios.post('http://localhost:5000/tokenclaim', { investId: value._id, projId: proj.pdt_id }).then((res) => {
                  console.log(res)
                  value.istokenClaimed = res.data.succes
                })
              }
              return (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {value.ProjectName}
                  </TableCell>
                  <TableCell align="right">{value.DateBrought}</TableCell>
                  <TableCell align="right">{value.invested}</TableCell>
                  <TableCell align="right">{value.tokenGain}</TableCell>
                  <TableCell align="right"><Button variant="outlined" sx={sxprop.buttonsx} disabled={value.istokenClaimed} onClick={claimtokenHandle}>Claim Token{value.istokenClaimed && `Claimed`}</Button></TableCell>
                </TableRow>)
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default Allocation