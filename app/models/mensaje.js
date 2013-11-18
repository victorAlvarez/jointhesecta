/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    config = require('../../config/config'),
    Schema = mongoose.Schema;


/**
 * Mensaje Schema
 */
var MensajeSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    asunto: {
        type: String,
        default: '',
        trim: true
    },
    contenido: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

/**
 * Validations
 */
MensajeSchema.path('asunto').validate(function(title) {
    return asunto.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
MensajeSchema.statics = {
    load: function(id, cb) {
        this.findOne({
            _id: id
        }).populate('user', 'name username').exec(cb);
    }
};

mongoose.model('Mensaje', MensajeSchema);