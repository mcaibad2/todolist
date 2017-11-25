var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var TodoSchema = new Schema({
    title: {
        type: 'String',
        required: true
    },
});
var Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;