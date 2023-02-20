const mongoose = require("mongoose");

const MemberModel = mongoose.Schema({
    userWallet: { type: String, ref: "CryptoUser" }, 
    whatMember: { type: String },
    startDateMem: { type: Date },
    noOfinvested: { type: Number }
})

const MemberDetails = mongoose.model('MemberTable', MemberModel)
module.exports = MemberDetails 