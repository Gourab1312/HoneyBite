// All the active projects are shown here
import React, { useState, useEffect, useContext, useRef } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import sxprop from './sxStyle';
import Cards from './Card';
import axios from 'axios';
import UserContext from '../context/appContext';
import CircularProgress from '@mui/material/CircularProgress';

const Allprojects = () => {
  const [loader, setLoader] = useState(false)
  const [btnshow, setShow] = useState(true)
  const context = useContext(UserContext);
  const { user } = context;
  const page = useRef(0)


  const [projectList, setprojectList] = useState([])
  const getprojectList = async () => {
    // let useraddres = User.current.walletAddress
    // console.log(useraddres);
    let templist = await axios.post(`http://localhost:5000/getprojects/some?page=${page.current}`, {
      walletAddress: user.userWallet
    })
    console.log(templist);
    setprojectList(templist.data.jsnres)
  }
  const showmore = async () => {
    setLoader(true)
    let existingList = projectList;
    page.current++
    let templist = await axios.post(`http://localhost:5000/getprojects/some?page=${page.current}`, {
      walletAddress: user.userWallet
    })
    if (Object.keys(templist.data.jsnres) == 0) {
      // alert('no more')
      setShow(false)
    }
    existingList = existingList.concat(templist.data.jsnres)
    console.log(existingList);
    setprojectList(existingList)
    setLoader(false)
  }
  useEffect(() => {
    getprojectList()
  }, [])
  return (


    <div>

      <Box sx={sxprop.headingboxsx}>
        <Typography variant='headingcon'>Active Projects</Typography>
      </Box>
      <Grid container spacing={3} sx={{marginTop:'40px'}}>
        {
          projectList.map((value, index) => {
            return (<Grid item xs={12} sm={4} key={index}>
              <Cards ido={value} />
            </Grid>)
          })
        }

      </Grid>
      <Box sx={sxprop.loadbox}>
        {loader && <CircularProgress />}
        {(!loader && btnshow) && <Button variant="outlined" sx={sxprop.buttonsx} onClick={showmore}>Load More</Button>}
      </Box>

    </div>
  )
}

export default Allprojects