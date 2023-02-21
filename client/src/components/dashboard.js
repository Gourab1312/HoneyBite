// This component is the dashboard where all user interacts with all the components
import React, {useState, useContext, useEffect} from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import sxprop from "./sxStyle";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import {Link, Route, Routes} from "react-router-dom";
// components import
import Allprojects from "./Allprojects";
import AirDrop from "./AirDrop";
import ProjectDetails from "./ProjectDetails";

import Membership from "./Membership";

import Feedback from "./Feedback";
import ContactUs from "./ContactUs";

import LaunchSection from "./LaunchSection";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions";

import UserContext from "../context/appContext";

// import axios from "axios";

// importingTransactionContextProviders
import {TransactionContext} from "../context/TransactionContext";

import {shortenWalletAddress} from "../utils/shortenWalletAddress";
import ConnectWalletError from "./ConnectWalletError";
import AirDropDetails from "./AirDropDetails";
import PaymentSuccessfull from "./PaymentSuccessfull";

const drawerWidth = 300;

const Dashboard = () => {
  const context = useContext(UserContext);
  const {user, setuser} = context;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userCrypto")) != null) {
      // alert('user logged in')
    }
  }, []);

  // destructuringTransactionContextProviderValue
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const drawer = (
    <>
      <Toolbar>
        <Typography variant="logosame">Cryptic</Typography>
      </Toolbar>
      <Box sx={sxprop.toolboxsx}>
        {/* ifWalletIsNotConnected */}
        {!currentAccount && (
          // <Button variant="outlined" sx={sxprop.buttonsx} onClick={handleuser}>
          <Button
            variant="outlined"
            sx={sxprop.buttonsx}
            onClick={connectWallet}
          >
            Connect Wallet
          </Button>
        )}
        {/* ifWalletIsConnected  */}
        {currentAccount && (
          <>
            <Button variant="outlined" sx={sxprop.buttonsx} size="small">
              {shortenWalletAddress(currentAccount)}
            </Button>

            <Typography
              variant="walletConnected"
              color="grey"
              gutterBottom
              align="center"
            >
              Wallet Connected :)
            </Typography>
          </>
        )}

        <Typography variant="captionmod" color="grey" gutterBottom>
          Your Cryptic Launchpad experience will be limited without connecting.
        </Typography>
      </Box>

      <Stack
        spacing={1}
        direction="column"
        sx={{margin: "20px 0", marginLeft: "20px"}}
      >
        <Typography variant="listfont" display="block" gutterBottom>
          <Link to="allprojects" style={{textDecoration: "none"}}>
            All Projects
          </Link>
        </Typography>
        <Typography variant="listfont" display="block" gutterBottom>
          <Link to="airdrop" style={{textDecoration: "none"}}>
            AirDrop
          </Link>
        </Typography>
        <Typography variant="listfont" display="block" gutterBottom>
          <Link to="membership" style={{textDecoration: "none"}}>
            Membership
          </Link>
        </Typography>
      </Stack>
    </>
  );

  // ResourceSectionDropdown
  const Resource = (
    <Accordion sx={sxprop.sxAccordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="accordianhead">Resource</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} direction="column">
          <Typography variant="listfont" display="block" gutterBottom>
            <Link to="feedbackAndBugReport" style={{textDecoration: "none"}}>
              Feedback & Bug Report
            </Link>
          </Typography>
          <Typography variant="listfont" display="block" gutterBottom>
            <Link to="contactUs" style={{textDecoration: "none"}}>
              Comtact Us
            </Link>
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );

  // GeneralSectionDropdown
  const General = (
    <Accordion sx={sxprop.sxAccordian}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="accordianhead">General</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Stack spacing={1} direction="column">
          <Typography variant="listfont" display="block" gutterBottom>
            <Link to="launchapplyto" style={{textDecoration: "none"}}>
              Apply to Launch
            </Link>
          </Typography>
          <Typography variant="listfont" display="block" gutterBottom>
            <Link to="privacyPolicy" style={{textDecoration: "none"}}>
              Privacy Policy
            </Link>
          </Typography>
          <Typography variant="listfont" display="block" gutterBottom>
            <Link to="termsAndConditions" style={{textDecoration: "none"}}>
              Terms & Conditions
            </Link>
          </Typography>
        </Stack>
      </AccordionDetails>
    </Accordion>
  );

  return (
    <Box sx={{display: "flex"}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: {xs: "block", sm: "none"},
          "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          backgroundColor: "white",
        }}
      >
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{mr: 2, display: {sm: "none"}}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="logosame">Cryptic</Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{width: {sm: 240}, flexShrink: {sm: 0}}}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          sx={{
            display: {xs: "block", sm: "none"},
            "& .MuiDrawer-paper": {boxSizing: "border-box", width: drawerWidth},
          }}
        >
          {drawer}
          {Resource}
          {General}
        </Drawer>
        <Drawer variant="permanent" sx={sxprop.drawersx} open>
          {drawer}
          {Resource}
          {General}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {sm: `calc(100% - ${drawerWidth}px)`},
          marginLeft: "29px",
          margin: {xs: "0 5px"},
        }}
      >
        <Routes>
          <Route path="/*" element={<Allprojects />}></Route>
          <Route path="/allprojects" element={<Allprojects />}></Route>
          <Route
            path="/airdrop"
            element={
              currentAccount === "" ? <ConnectWalletError /> : <AirDrop />
            }
          ></Route>
          <Route path="/projectdetails/*" element={<ProjectDetails />}></Route>
          <Route path="/allprojects/*" element={<ProjectDetails />}></Route>
          <Route path="/membership" element={<Membership />}></Route>
          <Route
            path="/payment-successful"
            element={<PaymentSuccessfull />}
          ></Route>
          <Route path="/feedbackAndBugReport" element={<Feedback />}></Route>
          <Route path="/contactUs" element={<ContactUs />}></Route>

          <Route
            path="/launchapplyto"
            element={
              currentAccount === "" ? <ConnectWalletError /> : <LaunchSection />
            }
          ></Route>
          <Route path="/privacyPolicy" element={<PrivacyPolicy />}></Route>
          <Route
            path="/termsAndConditions"
            element={<TermsAndConditions />}
          ></Route>
          <Route path="/airdrop-details/*" element={<AirDropDetails />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
