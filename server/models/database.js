const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection eroror man :'));
db.once('open', function() {
    console.log('connected');
    
});

//models
require('./Category');