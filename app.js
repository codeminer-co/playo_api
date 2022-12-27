const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


app.use(express.json());
app.use(cors(), (req, res, next) => {
    next()
})

app.use('/auth', authRoutes); 

app.listen(3000, () => {
    console.log("Server running at 3000");
});