import React from 'react'
import axios from "axios";
import {Button} from "@mui/material";
import sxprop from "./sxStyle";
function PayButton({price,type}) {

    const handleCheckout = () => {
        axios.post("http://localhost:5000/create-checkout-session"
        ,{
          price,
          type
        }).then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url
            }
        }).catch((err)=>console.log(err.message));
    }
  return (
    <div> 
      {/* <button onClick={()=> handleCheckout()}>Checkout</button> */}
      <Button  onClick={()=> handleCheckout()} sx={sxprop.memberbtn}>Purchase Now</Button>

    </div>
  )
}

export default PayButton
