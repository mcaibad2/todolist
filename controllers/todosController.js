const root = process.cwd();
const todosService = require(root + '/services/todosService');
const log = require(root + '/log');

/**
 * @api {post} /todos Create todo
 * @apiGroup Todos
 * @apiParam {String} title Todo title
 * @apiParamExample {json} Input
 * {
 *     "title": "Buy pens"
 * }
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
 * @apiErrorExample {json} Create a todo error
 * HTTP/1.1 500 Internal Server Error
 */
exports.create = (req, res, next) => {
    log.info(`create todo`)
    log.debug(`${JSON.stringify(req.body)}`)
    return todosService.create(req.body).then(result => {
        return todosService.read().then(result => {
            res.status(201).json(result);
        })
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
    log.info(`read todo`)
    return todosService.read(req.body).then(result => {
        res.status(200).json(result);
    })
}

/**
 * @api {update} /todos/:id Update todo
 * @apiGroup Todos
 * @apiParam {String} id Todo id
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
 * @apiErrorExample {json} Update todo error
 * HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Update todo error
 * HTTP/1.1 400 Bad Request
 */
exports.update = (req, res, next) => {
    log.info(`update todo with id ${req.params.id}`)
    log.debug(`update: ${JSON.stringify(req.body)}`)
    return todosService.update(req.params.id, req.body).then(result => {
        if (result) {
            return todosService.read().then(result => {
                res.status(200).json(result);
            })
        } else {
            res.status(404).json()
        }
    })
}

/**
 * @api {delete} /todos/:id Delete todo
 * @apiGroup Todos
 * @apiParam {String} id Todo id
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
 * @apiErrorExample {json} Delete todo error
 * HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Delete todo error
 * HTTP/1.1 400 Bad Request
 */
exports.delete = (req, res, next) => {
    log.info(`delete todo with id ${req.params.id}`)
    return todosService.delete(req.params.id).then(result => {
        if (result) {
            return todosService.read().then(result => {
                res.status(200).json(result);
            })
        } else {
            res.status(404).json()
        }
    })
}
