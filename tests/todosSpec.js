const request = require('supertest-as-promised')
const Promise = require("bluebird");
const should = require('should');

const root = process.cwd()
const app = require(root + '/app')
const todosService = require(root + '/services/todosService')

describe('Todos CRUD operations', () => {
    describe('POST /todos', () => {
        before(() => {
            return todosService.deleteAll().catch(err => {
                throw err
            })
        })
        it('Should respond with HTTP 201, create one todo and return todos list', () => {
            return request(app)
                .post('/todos')
                .send({
                    title: 'Kill Tsathoggua'
                })
                .expect(201)
                .then(res => {
                    res.status.should.equal(201)
                    res.body.length.should.equal(1)
                    res.body[0].title.should.equal('Kill Tsathoggua')
                })
        })
    })
    describe('GET /todos', () => {
        before(() => {
            return todosService.deleteAll().then(result => {
                return Promise.each([{
                    title: 'Buy pens'
                }, {
                    title: 'Pay bills'
                }], item => {
                    return todosService.create(item)
                })
            }).catch(err => {
                throw err
            })
        })
        it('Should respond with HTTP 200 and return todos list', () => {
            return request(app).get('/todos').expect(200).then(res => {
                res.status.should.equal(200)
                res.body.length.should.equal(2)
            })
        })
    })
    describe('DELETE /todos/:id', () => {
        before(() => {
            return todosService.deleteAll().then(result => {
                return Promise.each([{
                    title: 'Buy pens'
                }, {
                    title: 'Pay bills'
                }], item => {
                    return todosService.create(item)
                })
            }).catch(err => {
                throw err
            })
        })
        it('Should respond with HTTP 200, delete todo and return todos list', () => {
            return todosService.read({
                title: 'Buy pens'
            }).then(result => {
                let id = result[0]._id;
                return request(app)
                    .delete(`/todos/${id}`)
                    .expect(200)
                    .then(res => {
                        res.status.should.equal(200)
                        return todosService.read({
                            title: 'Buy pens'
                        })
                    }).then(result => {
                        result.should.be.empty
                    })
            })
        })
    })
})
