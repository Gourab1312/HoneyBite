// to avail the membership for each user
import React, {useContext} from "react";
import Box from "@mui/material/Box";
import sxprop from "./sxStyle";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Button, Divider, Grid, Stack} from "@mui/material";
import PayButton from "./PayButton";

const Membership = () => {
  return (
    <div>
      <Box sx={sxprop.headingboxsx}>
        <Typography variant="headingcon">Choose A Membership Plan</Typography>
        <Typography variant="captionmod" color="grey" gutterBottom>
          Select a plan that will be best for your need
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{marginTop: "40px"}}>
        {/* Plan-1 */}
        <Grid item xs={12} sm={4}>
          <Card sx={sxprop.membercardsx}>
            <CardContent>
              <Stack direction={"column"} sx={{alignItems: "center"}}>
                <Typography variant="memberheader">Basic</Typography>
                <Stack direction={"row"} spacing={1}>
                  <Typography variant="moneytext">Free</Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{borderWidth: "2px", borderColor: "white"}}
                  />
                  <Stack direction={"column"}>
                    <Typography variant="cardhrdtxt">FOR</Typography>
                    <Typography variant="cardhrdtxt">3 IDOs</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Typography variant="body2" sx={{margin: "10px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, doloremque exercitationem ab libero excepturi
                eligendi rerum aliquid iste, sapiente, laboriosam quis magni
                reiciendis quia harum aliquam placeat laudantium natus? Dicta!
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <Typography variant="listfont">IDO Limit</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">3</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="listfont">Early Access</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">No</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="listfont">TimeLimit</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">No</Typography>
                </Grid>
              </Grid>
              <Stack
                direction={"column"}
                sx={{alignItems: "center", marginTop: "10px"}}
              >
                <PayButton price="0100" type="IDO LIMIT 3"/>
                {/* <Button sx={sxprop.memberbtn}>Purchase Now</Button> */}
              </Stack>{" "}
            </CardContent>
          </Card>
        </Grid>

        {/* Plan-2 */}
        <Grid item xs={12} sm={4}>
          <Card sx={sxprop.membercardsx}>
            <CardContent>
              <Stack direction={"column"} sx={{alignItems: "center"}}>
                <Typography variant="memberheader">IDO SPECIAL</Typography>
                <Stack direction={"row"} spacing={1}>
                  <Typography variant="moneytext">$99</Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{borderWidth: "2px", borderColor: "white"}}
                  />
                  <Stack direction={"column"}>
                    <Typography variant="cardhrdtxt">FOR</Typography>
                    <Typography variant="cardhrdtxt">5 IDOs</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Typography variant="body2" sx={{margin: "10px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, doloremque exercitationem ab libero excepturi
                eligendi rerum aliquid iste, sapiente, laboriosam quis magni
                reiciendis quia harum aliquam placeat laudantium natus? Dicta!
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <Typography variant="listfont">IDO Limit</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">
                    5
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="listfont">Early Access</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">Yes</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="listfont">TimeLimit</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">No</Typography>
                </Grid>
              </Grid>
              <Stack
                direction={"column"}
                sx={{alignItems: "center", marginTop: "10px"}}
              >
              <PayButton price="9900" type="IDO LIMIT 5"/>

              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Plan-3 */}
        <Grid item xs={12} sm={4}>
          <Card sx={sxprop.membercardsx}>
            <CardContent>
              <Stack direction={"column"} sx={{alignItems: "center"}}>
                <Typography variant="memberheader">VENTURE SPECIAL</Typography>
                <Stack direction={"row"} spacing={1}>
                  <Typography variant="moneytext">$399</Typography>
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{borderWidth: "2px", borderColor: "white"}}
                  />
                  <Stack direction={"column"}>
                    <Typography variant="cardhrdtxt">FOR</Typography>
                    <Typography variant="cardhrdtxt">Any Amount</Typography>
                  </Stack>
                </Stack>
              </Stack>
              <Typography variant="body2" sx={{margin: "10px"}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium, doloremque exercitationem ab libero excepturi
                eligendi rerum aliquid iste, sapiente, laboriosam quis magni
                reiciendis quia harum aliquam placeat laudantium natus? Dicta!
              </Typography>
              <Grid container spacing={1}>
                <Grid item xs={9}>
                  <Typography variant="listfont">IDO Limit</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">
                    Unlimited
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="listfont">Early Access</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">Yes</Typography>
                </Grid>
                <Grid item xs={9}>
                  <Typography variant="listfont">Time Limit</Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="accordianhead">No</Typography>
                </Grid>
              </Grid>
              <Stack
                direction={"column"}
                sx={{alignItems: "center", marginTop: "10px"}}
              >
               <PayButton price="39900" type="IDO LIMIT Unlimited"/>

              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Membership;
