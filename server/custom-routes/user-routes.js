let User = require('../models/user')
let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

module.exports = {
  userVaults: {
    path: '/vaults',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Vaults'
      Vaults.find()
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  GetKeeps: {
    path: '/home',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Keeps'
      Keeps.find()
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