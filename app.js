const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Listing = require('./models/listing');   

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main().then(() => console.log('MongoDB connected')).catch(err => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
    res.send('Hello, I am root');
});

app.get('/testListings', async (req, res) => {
    let sampleListing = new Listing ({
        title: "My New Villa",
        description: "By the beach",
        price: 1200,
        location: "Calungate, Goa",
        country: "India"
    });

    await sampleListing.save();
    console.log("Sample was saved");
    res.send("successful testing");
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});