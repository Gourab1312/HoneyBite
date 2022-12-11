

const sxprop = {
    toolboxsx: { display: "flex", flexDirection: "column", AlignContent: "center", margin: "15px 10px" },
    buttonsx: {
        width: "fitcontent",
        borderRadius: "20px",
    },
    greybtnsx: {
        width: "fitcontent",
        borderRadius: "20px",
        '&.MuiButton-outlined': {

            color: '#8c8c8c',
            borderColor: '#8c8c8c'
        },
        '&.MuiButton-root': {
            fontFamily: "Open Sans",
            fontSize: "14px"
        }
    },
    sxAccordian: {
        '&.MuiAccordion-root': { boxShadow: 0 },
        '&:before': {
            backgroundColor: 'transparent',
            boxShadow: 0
        },
    },
    drawersx: {
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, borderRadius: "40px", boxShadow: " 31px 0px 55px -19px rgba(138,138,138,1)" },

    },
    headingboxsx:{
        margin:'5px 0'
    },
    buttongrpsx:{
        margin:'18px 0',
        marginTop:{xs: '45px'}
    },

    customcardsx:{
        minWidth: 275,
        borderRadius:'30px',
        backgroundColor:'#e9e9e9',
        boxShadow:0
    }
}

export default sxprop