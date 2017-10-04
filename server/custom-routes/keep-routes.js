let Keep = require('../models/keep')
let User = require('../models/user')

module.exports = {
    
    Keep: {
        path: 'users/:userId/keeps/:keepId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Keep'
            Keep.findById(req.params.keepId)
                .then(keep => {
                    console.log(keep)
                    res.send(handleResponse(action, keep))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    DeleteKeep: {
        path: '/users/:userId/keeps/:keepId',
        reqType: 'delete',
        method(req, res, next) {
            let action = 'Delete Keep'
            Keep.findByIdAndRemove(req.params.keepId)
                .then(vault => {
                    res.send(handleResponse(action, keep))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    PostKeep: {
        path: '/users/:userId/keeps',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Post Keep'

            Keep.create(req.body)
                .then(keep => {
                    res.send(handleResponse(action, keep))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
}
function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}