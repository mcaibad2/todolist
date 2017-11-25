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

exports.delete = (id) => {
    return Todo.findByIdAndRemoveAsync(id);
}

exports.deleteAll = () => {
    return Todo.removeAsync();
}