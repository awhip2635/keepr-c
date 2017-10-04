let User = require('../models/user')
let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

module.exports = {
  userVaults: {
    path: '/users/:userId/vaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Vaults'
      Vaults.find({creatorId: req.session.uid})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
GetKeeps: {
    path: '/users/:userId/keeps',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Keeps'
      Keeps.find({creatorId: req.session.uid})
        .then(keeps => {
          res.send(handleResponse(action, keeps))
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