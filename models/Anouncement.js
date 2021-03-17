const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

// Create schema
const AnouncementSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String, 
        required: [true, 'Content is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: ObjectId,
        required: [true, 'User id is required'],
        ref: 'User'
    },
    group: {
        type: ObjectId,
        required: [true, 'Anouncement group is required'],
        ref: 'AncGroup'
    }
})

module.exports = mongoose.model('Anouncement', AnouncementSchema);