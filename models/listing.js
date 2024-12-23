const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    price: Number,
    description: String,
    location: String,
    image: {
        type: String,
        default: "https://www.istockphoto.com/photo/firework-display-on-the-occasion-of-diwali-gm468941306-62112324",   
        set: (v) => v === "" ? "https://www.istockphoto.com/photo/firework-display-on-the-occasion-of-diwali-gm468941306-62112324": v, 
    },
    country: String
});

const Listing = mongoose.model('Listing', listingSchema);
module.exports = Listing;   