const mongoose = require("mongoose");

const ProjectModel = mongoose.Schema(
    {
        name: { type: String },
        token_name: { type: String },
        total_fund: { type: Number },
        total_token: { type: Number },
        start_date: { type: Date },
        end_date: { type: Date },
        linkedln_url: { type: String },
        website_url: { type: String },
        telegram_url: { type: String }
    }
)

const ProjectDetails = mongoose.model('ProjectDetails', ProjectModel)
module.exports = ProjectDetails;