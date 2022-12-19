const ProjectDetails = require('../models/ProjectModel')
const express = require("express");
const router = express.Router();

router.post('/addproject', async (req, res) => {
    const { name,
        token_name,
        total_fund,
        total_token,
        start_date,
        end_date,
        linkedln_url,
        website_url,
        telegram_url } = req.body;
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
            token_name,
            total_fund,
            total_token,
            start_date,
            end_date,
            linkedln_url,
            website_url,
            telegram_url
        }).save()
        res.status(200).json({
            success: true,
            user: newProj
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
})

router.get('/getprojects/some', async (req, res) => {
    const page = req.query.page || 0
    const projperpage = 1
    let jsnres = await ProjectDetails.find().skip(page * projperpage).limit(projperpage)
    res.status(200).json({
        jsnres
    })
})
module.exports = router;