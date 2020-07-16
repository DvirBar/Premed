const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create schema
const PathSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    }
})

module.exports = mongoose.model('Path', PathSchema);