const ProjectDetails = require('../models/ProjectModel')
const MemberDetails = require('../models/MemShipModel')
const express = require("express");
const router = express.Router();

router.post('/addproject', async (req, res) => {
    const { name,
        swap_rate,
        token_name,
        total_fund,
        total_token,
        start_date,
        end_date,
        linkedln_url,
        website_url,
        telegram_url,
        writeup,
        img_url } = req.body;
    try {
        const existingproj = await ProjectDetails.findOne({ token_name: req.body.token_name })
        if (existingproj) {
            throw {
                statusCode: 400,
                message: "Give Unique token name"
            }
        }
        
        const newProj = await new ProjectDetails({
            name,
            swap_rate,
            token_name,
            total_fund,
            total_token,
            start_date,
            end_date,
            linkedln_url,
            website_url,
            telegram_url,
            writeup,
            img_url,
            isInvestOn: true
        }).save()
        res.status(200).json({
            success: true,
            proj: newProj
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
})

router.post('/getprojects/some', async (req, res) => {
    const page = req.query.page || 0
    const projperpage = 3
    var systime1 = new Date()
    var systime2 = new Date()
    systime1.setDate(systime1.getDate() + 1);
    var jsnres;
    // var member = await MemberDetails.findOne({ userWallet: req.body.walletAddress })
    // if (member?.isMember) { //jara member tara ekdin aage dekte pabe
    //     console.log(systime1);
    //     jsnres = await ProjectDetails.find({ start_date: { $lte: systime1 } }).skip(page * projperpage).limit(projperpage)
    // }
    // else {
    //     jsnres = await ProjectDetails.find({ start_date: { $lte: systime2 } }).skip(page * projperpage).limit(projperpage)
    // }
    jsnres = await ProjectDetails.find().sort({ end_date: -1 }).skip(page * projperpage).limit(projperpage)
    res.status(200).json({
        jsnres
    })
})
module.exports = router;