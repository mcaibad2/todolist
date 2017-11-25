const root = process.cwd()
const todosService = require(root + '/services/todosService')

/**
 * @api {post} /todos Create todo
 * @apiGroup Todos
 * @apiParam {String} title Todo title
 * @apiParamExample {json} Input
 * {
 *      "title": "Buy pens"
 * }
 * @apiSuccess {String} _id Todo id
 * @apiSuccess {String} title Todo title
 * @apiSuccessExample {json} Success
 * HTTP/1.1 201 CREATED
 * {
 *     "_id":"5a1961ac89d4a31ad8d2d9a3",
 *     "title":"Buy pens",
 *     "__v":0
 * }
 * @apiErrorExample {json} Create a todo error
 * HTTP/1.1 500 Internal Server Error
 */
exports.create = (req, res, next) => {
    return todosService.create(req.body).then(result => {
        res.status(201).json(result);
    })
}

/**
 * @api {get} /todos Read todos
 * @apiGroup Todos
 * @apiSuccess {Object[]} todos Todo's list
 * @apiSuccess {String} todos._id Todo id
 * @apiSuccess {String} todos.title Todo title
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * [{
 *    "_id":"5a1961ac89d4a31ad8d2d9a3",
 *    "title":"Buy pens",
 *    "__v":0
 *},
 *{
 *    "_id":"5a1961ac89d4a31ad8d2d9a4",
 *    "title":"Pay bills",
 *    "__v":0
 *}]
 * @apiErrorExample {json} Read todos error
 * HTTP/1.1 500 Internal Server Error
 */
exports.read = (req, res, next) => {
    return todosService.read(req.body).then(result => {
        res.status(200).json(result);
    })
}

/**
 * @api {delete} /todos/:id Delete todo
 * @apiGroup Todos
 * @apiParam {String} id Todo id
 * @apiSuccessExample {json} Success
 * HTTP/1.1 204 No Content
 * @apiErrorExample {json} Delete todo error
 * HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Delete todo error
 * HTTP/1.1 400 Bad Request
 */
exports.delete = (req, res, next) => {
    if (req.params.id) {
        return todosService.delete(req.params.id).then(result => {
            res.status(204)
        })
    } else {
        res.status(400);
    }
}
