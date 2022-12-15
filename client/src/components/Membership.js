import React from 'react'
import Box from '@mui/material/Box';
import sxprop from './sxStyle';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Grid, Stack } from '@mui/material';

const Membership = () => {
    return (
        <div>
            <Box sx={sxprop.headingboxsx}>
                <Typography variant='headingcon'>Choose A Membership Plan</Typography>
                <Typography variant="captionmod" color="grey" gutterBottom>
                    Select a plan that will be best for your need
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                <Card sx={sxprop.customcardsx} >
                    <CardContent>
                        <Grid container spacing={1} sx={{ alignItems: 'center', marginBottom: '10px' }}>
                            <Grid item xs={10}><Typography variant='cardhrdtxt'>
                            jhkjgh
                            </Typography>
                                <Stack direction={'column'}>
                                    
                                </Stack>
                            </Grid>
                            <Grid item xs={2}><Typography variant='cardhrdtxt'>
                                dsfsdfsd
                            </Typography></Grid>
                        </Grid>
                        <Typography variant="body2" sx={{ margin: '10px' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloremque exercitationem ab libero excepturi eligendi rerum aliquid iste, sapiente, laboriosam quis magni reiciendis quia harum aliquam placeat laudantium natus? Dicta!
                        </Typography>
                        <Grid container spacing={1}>
                            <Grid item xs={9}><Typography variant='listfont'>
                                Investment Limit
                            </Typography></Grid>
                            <Grid item xs={3}><Typography variant='accordianhead'>
                                $10,000 Per IDOs
                            </Typography></Grid>
                            <Grid item xs={8} sm={9}><Typography variant='listfont'>
                                Early Access
                            </Typography></Grid>
                            <Grid item xs={4} sm={3}><Typography variant='accordianhead'>
                                24 Hr
                            </Typography></Grid>
                            <Grid item xs={9}><Typography variant='listfont'>
                                TimeLimit
                            </Typography></Grid>
                            <Grid item xs={3}><Typography variant='accordianhead'>
                                No
                            </Typography></Grid>
                        </Grid>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Membership