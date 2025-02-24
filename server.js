const express = require('express');
const cors =require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
port=5000;

const app = express();
const Schema = require('./model/restaurantSchema');
const restaurantSchema = require('./model/restaurantSchema');

app.use(cors());

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/model/restaurantSchema', { useNewUrlParser: true });

app.get('/api/restaurantSchema', async (req, res) => {
    const schema = await Schema.find();
    res.json(schema);
    });

app.post('/api/restaurantSchema', async (req, res) => {
    const schema = new Schema({
        name: req.body.name,
        location: req.body.location,
        cuisine: req.body.cuisine,
        rating: req.body.rating,
        menu: req.body.menu,
    });

    await schema.save();
    res.json(schema);
}
);
app.put('/api/restaurantSchema/:id', async (req, res) => {
    const schema = await Schema.findById(req.params.id);

    schema.name = req.body.name;
    schema.location = req.body.location;
    schema.cuisine = req.body.cuisine;
    schema.rating = req.body.rating;
    schema.menu = req.body.menu;

    await schema.save();
    res.json(schema);
});

app.delete('/api/restaurantSchema/:id', async (req, res) => {
    const schema = await Schema.findById(req.params.id);
    await schema.remove();
    res.json({ message: 'Schema deleted' });

});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});


