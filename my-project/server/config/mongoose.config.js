const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopledb',{
    useNewUrlParser: true, // Allows users to fall onto the old Parser if there is a bug in the new parser
    useUnifiedTopology: true // Removes support for several connection options that are no longer relevant with new Topology engine
})
    .then(() => console.log("Database connection established"))
    .catch(err => console.log("There was an error", err))