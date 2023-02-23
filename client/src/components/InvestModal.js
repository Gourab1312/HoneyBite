import React, {useState, useContext, useRef, useEffect} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {Stack, TextField} from "@mui/material";

// forFetchingLiveEthereumPrice
import axios from "axios";

import {TransactionContext} from "../context/TransactionContext";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const InvestModal = ({mod}) => {
  //   enablingBlockchainTransactionFunctionality
  const {
    currentAccount,
    connectWallet,
    sendTransaction,
    isLoading,
    ICOLaunchSectionCryptoInvestmentData,
    handleICOLaunchSectionDataChange,
  } = useContext(TransactionContext);

  // fetchAndSetProjectWalletAddress
  // const fetchAndSetProjectWalletAddress = () => {
  //   handleICOLaunchSectionDataChange(
  //     "addressTo",
  //     mod.investInfo.projectWalletAddress
  //   );

  const iserror = useRef(false);
  const [InvestDetails, SetDetails] = useState({
    projId: mod.investInfo.id,
    userWallet: currentAccount,
    token_name: mod.investInfo.tokenName,
    invested: 0,
    ProjectName: mod.investInfo.Name,
  });

  const handleClose = () => mod.setOpen(false);
  //   const handleSubmit = () => {
  //     if (InvestDetails.invested == 0 && !iserror.current) {
  //       alert("Invested Can't be Zero or more that max fund");
  //     } else {
  //       // TriggerBlockchainWalletTransaction
  //       sendTransaction();

  //       console.log(InvestDetails);
  //       axios
  //         .post("http://localhost:5000/investproj", InvestDetails)
  //         .then((res) => {
  //           console.log(res);
  //         });
  //     }
  //     console.log("this working");
  //   };

  const checkValue = (e) => {
    if (e.target.value > mod.investInfo.totalFund) {
      iserror.current = true;
      // alert('not happening')
      SetDetails({...InvestDetails, invested: 0});
    } else {
      iserror.current = false;
      SetDetails({...InvestDetails, invested: e.target.value});
    }
  };

  //   settingDemoProjectPublicAddress
  //   const addressTo = "0xd34861d1dc54bdaa9b42a9fbc875bf9685804b17";

  //   handlingInvestmentsThroughCryptocurrency
  const handleSubmitCryptoInvestmemt = (e) => {
    // console.log("invest fired >>>");

    const {addressTo, amount} = ICOLaunchSectionCryptoInvestmentData;

    // check
    // console.log(addressTo);
    // console.log(amount);

    e.preventDefault();
    if (!amount || !addressTo) return;
    sendTransaction();

    //     if (InvestDetails.invested == 0 && !iserror.current) {
    //       alert("Invested Can't be Zero or more that max fund");
    //     } else {
    //       // TriggerBlockchainWalletTransaction
    //       sendTransaction();

    //       console.log(InvestDetails);
    //       axios
    //         .post("http://localhost:5000/investproj", InvestDetails)
    //         .then((res) => {
    //           console.log(res);
    //         });
    //     }
    //     console.log("this working");
  };

  // liveEthereumValue
  //   forStoringLiveEthereumPriceInINR
  const [ethereumValueInInr, setEthereumValueInInr] = useState(null);

  //   functionToFetchLiveEthereumPriceInINR
  useEffect(() => {
    const fetchLiveEthereumPriceInINR = async () => {
      const result = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr"
      );
      setEthereumValueInInr(result.data.ethereum.inr);
    };
    fetchLiveEthereumPriceInINR();
  }, []);

  return (
    <div>
      <Modal
        open={mod.open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {mod.investInfo.Name}
          </Typography>
          {/* displayingLiveEthereumValue */}
          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Ethereum - INR
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {ethereumValueInInr}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Total Token
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {mod.investInfo.totalToken}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            sx={{
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Total Fund
            </Typography>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {mod.investInfo.totalFund}
            </Typography>
          </Stack>{" "}
          <Typography id="modal-modal-description" sx={{mt: 2}}>
            Note* Invest must be less than or equal to Total Fund
          </Typography>
          {/* check */}
          {/* <Typography id="modal-modal-description" sx={{mt: 2}}>
            {mod.investInfo.projectWalletAddress}
          </Typography> */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Invest Amount
          </Typography>
          {/* forFiatInvestments */}
          {/* <TextField
            name="Amount"
            required
            label="Total Fund in $"
            fullWidth
            type={"number"}
            error={iserror.current}
            onChange={(e) => checkValue(e)}
            helperText={
              iserror.current && "Invest Amount can't be more than Total Fund"
            }
          /> */}
          {/* forCryptoInvestments */}
          {/* enterProjectWalletAddressManuallyForNow */}
          <Grid item sm={12} mb={1} mt={1}>
            {/* <TextField
              name="addressTo"
              required
              label="Project Wallet Address"
              placeholder="Enter project wallet address ?"
              fullWidth
              type={"text"}
              onChange={(e) => handleICOLaunchSectionDataChange(e, "addressTo")}
            /> */}
            <TextField
              name="addressTo"
              required
              // label="Project Wallet Address"
              // placeholder="Enter project wallet address ?"
              fullWidth
              type={"text"}
              value={mod.investInfo.projectWalletAddress}
              onChange={(e) =>
                handleICOLaunchSectionDataChange("addressTo", e.target.value)
              }
            />
          </Grid>
          <Grid item sm={12} mb={1} mt={1}>
            {/* enterInvestmentValueInEthForNow */}
            <TextField
              name="amount"
              required
              label="Investment Amount"
              placeholder="Enter investment amount (in Eth) ?"
              fullWidth
              type={"number"}
              onChange={(e) =>
                handleICOLaunchSectionDataChange("amount", e.target.value)
              }
            />
          </Grid>
          <Grid item sm={12} mt={1}>
            {isLoading ? (
              <Box sx={{display: "flex"}}>
                <CircularProgress />
              </Box>
            ) : (
              <Button
                variant="outlined"
                type="submit"
                fullWidth
                style={{fontWeight: 800}}
                // investingUsingFiat

                // onClick={handleSubmit}

                // investingUsingCrypto
                onClick={handleSubmitCryptoInvestmemt}
              >
                Invest
              </Button>
            )}
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default InvestModal;
