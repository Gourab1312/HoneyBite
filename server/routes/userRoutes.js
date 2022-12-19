const CryptoUser = require("../models/User")
const { hashPassword, comparePassword } = require("../config/generatehash")
const express = require("express");
const router = express.Router();

router.post('/usercrypto', async (req, res) => {
    try {
        const existinguser = await CryptoUser.findOne({ walletAddress: req.body.walletAddress })
        if (existinguser) {
            throw {
                statusCode: 400,
                message: "user already exist"
            }

        };
        const newUser = await new CryptoUser({
            ...req.body,
            walletAddress: req.body.walletAddress,
        }).save();

        res.status(200).json({
            success: true,
            user: newUser
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
})


module.exports = router;