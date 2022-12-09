const sxprop = {
    toolboxsx: { display: "flex", flexDirection: "column", AlignContent: "center", margin: "15px 10px" },
    buttonsx: {
        width: "fitcontent",
        borderRadius: "20px"
    },
    sxAccordian: {
        '&.MuiAccordion-root':{boxShadow: 0},
        '&:before': {
            backgroundColor: 'transparent',
            boxShadow: 0
        },
    },
    drawersx: {
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, borderRadius: "40px", boxShadow: " 31px 0px 55px -19px rgba(138,138,138,1)" },

    }
}

export default sxprop