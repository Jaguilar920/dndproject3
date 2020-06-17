const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    img: {type: String, required: false},
    name: { type: String, required: true },
    affiliation: { type: String, required: true },
    alignment: { type: String, required: true },
    abilities: { type: Number, required: true},
    personality: { type: String, required: true },
    background: { type: String, required: false },
    track: Boolean
}, { timestamps: true });


const Character = mongoose.model('Character', characterSchema);


module.exports = Character;