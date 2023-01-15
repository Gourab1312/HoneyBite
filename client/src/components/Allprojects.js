import React, { useState, useEffect, useContext, useRef } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import sxprop from './sxStyle';
import Cards from './Card';
import axios from 'axios';

var dummywallet = '13wqewqe231trtyty0wq';
const Allprojects = () => {
  const page = useRef(2)


  const [projectList, setprojectList] = useState([])
  const getprojectList = async () => {
    // let useraddres = User.current.walletAddress
    // console.log(useraddres);
    let templist = await axios.post(`http://localhost:5000/getprojects/some?page=${page.current}`, {
      walletAddress: dummywallet
    })
    console.log(templist);
    setprojectList(templist.data.jsnres)
  }
  useEffect(() => {
    getprojectList()
  }, [])
  return (


    <div>
      <Stack direction="row" spacing={2} sx={sxprop.buttongrpsx}>
        <Button variant='outlined' sx={sxprop.buttonsx}>Upcoming IDO</Button>
        <Button variant='outlined' sx={sxprop.greybtnsx}>Ended IDO</Button>
        <Button variant='outlined' sx={sxprop.greybtnsx}>Insured Projects</Button>
      </Stack>

      <Box sx={sxprop.headingboxsx}>
        <Typography variant='headingcon'>Upcoming Projects</Typography>
      </Box>
      <Grid container spacing={3}>
        {
          projectList.map((value, index) => {
            return <Grid item xs={12} sm={4} key={index}>
              <Cards ido={value} />
            </Grid>
          })
        }

      </Grid>

    </div>
  )
}

export default Allprojects