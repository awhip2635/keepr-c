var  models = require('../config/constants').models
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true},
    description: { type: String, required: false},
    image: { type: String, required: true},
    //Relationships
    creatorId: { type: ObjectId, ref: models.user.name, required: true},
    vaultId: [{ type: ObjectId, ref: models.vault.name, required: true, default: null  }]
});

module.exports = mongoose.model(models.keep.name, schema);