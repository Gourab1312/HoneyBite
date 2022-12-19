const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require('cors')
const userRoutes = require("./routes/userRoutes")
const projectRoutes = require('./routes/projectRoutes')

dotenv.config()

const app = express()
app.use(cors()) //actual link will be added later
app.use(express.json())

app.use(userRoutes)
app.use(projectRoutes)


const port = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_URI).then(app.listen(port, () => console.log(`server running on ${port}`))).catch((error) => console.log(error.message))
