import React, { useState, useContext, useRef } from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack, TextField } from '@mui/material';
import UserContext from '../context/appContext';
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const InvestModal = ({ mod }) => {
    const context = useContext(UserContext);
    const { user } = context;
    const iserror = useRef(false)
    const [InvestDetails, SetDetails] = useState(
        {
            projId: mod.investInfo.id,
            userWallet: user.userWallet,
            token_name: mod.investInfo.tokenName,
            invested: 0,
            ProjectName: mod.investInfo.Name
        }
    )
    const handleClose = () => mod.setOpen(false);
    const handleSubmit = () => {
        if (InvestDetails.invested == 0 && !iserror.current) {
            alert("Invested Can't be Zero or more that max fund")
        }
        else {
            console.log(InvestDetails);
            axios.post('http://localhost:5000/investproj', InvestDetails).then((res) => {
                console.log(res);
            })
        }
        console.log('this working');
    }
    const checkValue = (e) => {
        if (e.target.value > mod.investInfo.totalFund) {
            iserror.current = true
            // alert('not happening')
            SetDetails({ ...InvestDetails, invested: 0 })
        }
        else {
            iserror.current = false
            SetDetails({ ...InvestDetails, invested: e.target.value })
        }

    }
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
                    <Stack direction={'row'} sx={{
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Total Token
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {mod.investInfo.totalToken}
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} sx={{
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Total Fund
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            {mod.investInfo.totalFund}
                        </Typography>
                    </Stack>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Note* Invest must be less than or equal to Total Fund
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Invest Amount
                    </Typography>
                    <TextField name='Amount' required label="Total Fund in $" fullWidth type={'number'} error={iserror.current} onChange={(e) => checkValue(e)} helperText={iserror.current && "Invest Amount can't be more than Total Fund"} />
                    <Button onClick={handleSubmit} type="submit">Submit</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default InvestModal