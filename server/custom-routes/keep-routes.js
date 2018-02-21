let Keep = require('../models/keep')
let User = require('../models/user')

module.exports = {
    PostKeep: {
        path: '/home',
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

    GetKeep: {
        path: '/home/:keepId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get Keep'
            Keep.findById(req.params.keepId)
            .then(keep => {
                res.send(handleResponse(action, keep))
            }).catch(error => {
                return next(handleResponse(action, null, error))
            })
        }
    },
    DeleteKeep: {
        path: '/home/:keepId',
        reqType: 'delete',
        method(req, res, next){
            let action = 'Delete Keep'
            Keep.findByIdAndRemove(req.params.keepId)
            .then(keep =>{
                res.send(handleResponse(action, keep))
            }).catch(error => {
                return next (handleResponse(action, null, error))
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