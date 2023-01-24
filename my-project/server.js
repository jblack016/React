//Create Express project
const express = require('express');
const cors = require('cors');
const app = express();

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}))


// Require all of the routes from the routes folder
require('./server/routes/person.routes')(app);

app.listen(8000, () => {
    console.log("You are now listening at Port 8000")
})