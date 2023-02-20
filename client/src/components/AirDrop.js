// This components where the unreleased projects are fteched from backend 
import React, { useState, useEffect, useRef } from 'react'
import { Grid } from '@mui/material';
import AirdropCards from './AirdropCards';
import Box from '@mui/material/Box';
import sxprop from './sxStyle';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const AirDrop = () => {
  const [airdrop, setairdrop] = useState([])
  const [loader, setLoader] = useState(false)
  const [btnshow, setShow] = useState(true)
  const page = useRef(0)
  const getAirdropProj = async () => {
    // let useraddres = User.current.walletAddress
    // console.log(useraddres);
    let templist = await axios.get(`http://localhost:5000/getprojectsfuture?page=${page.current}`)
    console.log(templist);
    setairdrop(templist.data.jsnres)
  }
  const showmore = async () => {
    setLoader(true)
    let existingList = airdrop;
    page.current++
    let templist = await axios.get(`http://localhost:5000/getprojectsfuture?page=${page.current}`)
    if (Object.keys(templist.data.jsnres) == 0) {
      // alert('no more')
      setShow(false)
    }
    existingList = existingList.concat(templist.data.jsnres)
    console.log(existingList);
    setairdrop(existingList)
    setLoader(false)
  }
  useEffect(() => {
    getAirdropProj()
  }, [])

  return (


    < div >
      <Box sx={sxprop.headingboxsx}>
        <Typography variant='headingcon'>AirDrop Projects</Typography>
        <Typography variant="captionmod" color="grey" gutterBottom>
          Participate in Our Exclusive Airdrops
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ marginTop: '40px' }}>
        {
          airdrop.map((value, index) => {
            return <Grid item xs={12} sm={4} key={index}>
              <AirdropCards ido={value} />
            </Grid>
          })
        }

      </Grid>
      <Box sx={sxprop.loadbox}>
        {loader && <CircularProgress />}
        {(!loader && btnshow) && <Button variant="outlined" sx={sxprop.buttonsx} onClick={showmore}>Load More</Button>}
      </Box>
    </div >

  )
}

export default AirDrop