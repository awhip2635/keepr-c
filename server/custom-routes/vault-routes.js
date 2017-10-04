let Vault = require('../models/vault')
let User = require('../models/user')
let Keep = require('../models/keep')
console.log('right page')
module.exports = {

    Vault: {
        path: '/users/:userId/vaults/:vaultId',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Vault'
            Vault.findById(req.params.vaultId)
                .then(vault => {
                    console.log(vault)
                    res.send(handleResponse(action, vault))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    DeleteVault: {
        path: '/users/:userId/vaults/:vaultId',
        reqType: 'delete',
        method(req, res, next) {
            let action = 'Delete Vault'
            Vault.findByIdAndRemove(req.params.vaultId)
                .then(vault => {
                    res.send(handleResponse(action, vault))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    PostVault: {
        path: '/users/:userId/vaults',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Post Vault'

            Vault.create(req.body)
                .then(vault => {
                    res.send(handleResponse(action, vault))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    PostKeepToVault: {
        path: '/users/:userId/vaults/:vaultId/keeps',
        reqType: 'post',
        method(req, res, next) {
            let action = 'Post Keep to Vault'

            Keep.create(req.body)
                .then(keep => {
                    res.send(handleResponse(action, keep))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },

    DeleteKeepFromVault: {
        path: '/users/:userId/vaults/:vaultId/keeps/:keepId',
        reqType: 'delete',
        method(req, res, next) {
            let action = 'Delete Keeps from Vault'
            Keep.findByIdAndRemove(req.params.keepId)
                .then(keep => {
                    res.send(handleResponse(action, keep))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    GetKeepInVault: {
        path: '/users/:userId/vaults/:vaultId/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Find Keeps in Vault'

            Keep.find({ vaultId: req.params.vaultId })
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