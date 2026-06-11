const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

// URL-encode the password containing special characters
const encodedPassword = encodeURIComponent('Mistake@789');

mongoose.connect('mongodb+srv://bilalbisharat:${encodedPassword}@tiersdatabase.kfumywe.mongodb.net/',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

var db = mongoose.connection;
db.on('error',() => console.log('error'));
db.once('open',() => console.log('database connected'))

module.exports = {db}