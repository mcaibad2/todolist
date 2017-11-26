const root = process.cwd()
const Promise = require("bluebird");
const Todo = require(root + '/models/todo');

exports.create = (obj) => {
    var todo = new Todo(obj);
    return todo.saveAsync();
}

exports.read = (criteria) => {
    return Todo.findAsync(criteria);
}

exports.update = (id, update) => {
    return Todo.findByIdAndUpdateAsync(id, update);
}

exports.delete = (id) => {
    return Todo.findByIdAndRemoveAsync(id);
}

exports.deleteAll = () => {
    return Todo.removeAsync();
}

exports.findById = (id) => {
    return Todo.findByIdAsync(id);
}