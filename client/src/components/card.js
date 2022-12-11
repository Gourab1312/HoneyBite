import * as React from 'react';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';
import Typography from '@mui/material/Typography';
import sxprop from './sxStyle';
import { Avatar, Grid, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import customTheme from './dashStyle';
import { createTheme } from '@mui/material';




const Cards = () => {
    const theme = createTheme(customTheme)
    return (
        <ThemeProvider theme={theme}>
            <Card sx={sxprop.customcardsx}>
                <CardContent>
                    <Grid container spacing={1} sx={{alignItems:'center' , marginBottom:'10px'}}>
                        <Grid item xs={10}><Typography variant='cardhrdtxt'>
                            Harmony Launcher
                        </Typography>
                            <Stack direction={'column'}>
                                <Typography variant='captionmod'>$HAL</Typography>
                                <Stack direction={'row'} spacing={1}>
                                    <LanguageIcon />
                                    <FacebookIcon />
                                    <LinkedInIcon />
                                    <TelegramIcon />
                                    <TwitterIcon />
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={2}><Typography variant='cardhrdtxt'>
                            <Avatar sx={{ bgcolor: '#838588' }}>H</Avatar>
                        </Typography></Grid>
                    </Grid>
                    <Typography variant="body2" sx={{ margin: '10px' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, doloremque exercitationem ab libero excepturi eligendi rerum aliquid iste, sapiente, laboriosam quis magni reiciendis quia harum aliquam placeat laudantium natus? Dicta!
                    </Typography>
                    <Grid container spacing={1}>
                        <Grid item xs={9}><Typography variant='listfont'>
                            Total Raise
                        </Typography></Grid>
                        <Grid item xs={3}><Typography variant='accordianhead'>
                            $30,000
                        </Typography></Grid>
                        <Grid item xs={8} sm={9}><Typography variant='listfont'>
                            Price
                        </Typography></Grid>
                        <Grid item xs={4} sm={3}><Typography variant='accordianhead'>
                            1HL=0.02BUSD
                        </Typography></Grid>
                        <Grid item xs={9}><Typography variant='listfont'>
                            Starting Date
                        </Typography></Grid>
                        <Grid item xs={3}><Typography variant='accordianhead'>
                            Dec 12,2022
                        </Typography></Grid>
                    </Grid>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export default Cards