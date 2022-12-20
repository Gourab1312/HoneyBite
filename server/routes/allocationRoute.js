const ProjectAllocation = require('../models/AllocationTable')
const express = require("express");
const router = express.Router();

router.post('/investproj', async (req, res) => {
    const { userWallet, token_name, invested, ProjectName, DateBrought } = req.body
    try {
        const newallocation = await new ProjectAllocation({ userWallet, token_name, invested, ProjectName, DateBrought }).save()
        res.status(200).json({
            succes: true,
            allocation: newallocation
        })
    } catch (error) {
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message
        });
    }
})

router.put('/tokenclaim',async(req,res)=>{
    const {id} = req.body
})
