const mongoose = require("mongoose");

const AllocationModel = mongoose.Schema(
    {
        userWallet: { type: String, ref: "CryptoUser" },
        invested: { type: Number },
        tokenGain: { type: Number },
        tokenName: { type: String },
        ProjectName: { type: String },
        DateBrought:{type:Date,default: Date.now},
        istokenClaimed:{type:Boolean,default:false}
    }
)
const ProjectAllocation = mongoose.model('ProjectAllocation', AllocationModel)
module.exports = ProjectAllocation;