const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // client_id: { type: Number, unique: true,},
});

module.exports = mongoose.model('Client', clientSchema);
