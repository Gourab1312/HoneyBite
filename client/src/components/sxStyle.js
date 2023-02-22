// this is componets where all the custom styles are done and passed as props
const sxprop = {
  loadbox: {display: "flex", justifyContent: "center", margin: "15px 10px"},
  toolboxsx: {
    display: "flex",
    flexDirection: "column",
    AlignContent: "center",
    margin: "1px 10px",
  },
  buttonsx: {
    width: "fitcontent",
    height: "fitcontent",
    borderRadius: "15px",
    borderColor: "white",
    fontFamily: "Montserrat",
    fontWeight: "600",
    color: "white",
  },
  greybtnsx: {
    width: "fitcontent",
    borderRadius: "20px",
    "&.MuiButton-outlined": {
      color: "#8c8c8c",
      borderColor: "#8c8c8c",
    },
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      fontSize: "14px",
      fontWeight: "600",
    },
  },
  sxAccordian: {
    "&.MuiAccordion-root": {boxShadow: 0},
    "&:before": {
      backgroundColor: "transperant",
      boxShadow: 0,
    },
  },
  drawersx: {
    display: {xs: "none", sm: "block"},
    "& .MuiDrawer-paper": {
      boxSizing: "border-box",
      width: 250,
      borderRadius: "0px 25px 25px 0px",
      boxShadow: "10px 0px 30px 0px rgba(138,138,138,1)",
      padding: "10px",
      backgroundImage:
        "linear-gradient(to right bottom, #00426b, #1e608e, #367fb3, #4ca0d8, #62c3ff)",
    },
  },
  headingboxsx: {
    margin: "5px 0",
    fontFamily: "Montserrat",
    fontWeight: "600",
  },
  subboxsx: {margin: "10px 25px"},
  buttongrpsx: {
    margin: "18px 0",
    marginTop: {xs: "45px"},
  },

  customcardsx: {
    width: "100%",
    borderRadius: "10px",
    backgroundColor: "#e9e9e9",
    boxShadow: 5,
  },
  headercardsx: {
    maxWidth: 500,
    borderRadius: "30px",
    backgroundColor: "transparent",
    boxShadow: 0,
  },
  sxfaq: {
    "&.MuiAccordion-root": {
      boxShadow: 0,
      width: "50%",
      marginTop: "40px",
    },
    "&:before": {
      backgroundColor: "transparent",
      boxShadow: 0,
      width: "50%",
    },
  },
  membercardsx: {
    backgroundColor: "#2e79eb",
    color: "white",
    borderRadius: "30px",
  },
  memberbtn: {
    width: "fitcontent",
    borderRadius: "20px",
    "&.MuiButton-outlined": {
      color: "#8c8c8c",
      borderColor: "#8c8c8c",
    },
    "&.MuiButton-root": {
      fontFamily: "Montserrat",
      fontSize: "14px",
      backgroundColor: "white",
    },
  },
};

export default sxprop;
