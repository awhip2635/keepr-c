const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  vault: {
    name: 'Vault',
    endpoint: 'Vaults',
    useCustomRoutes: true
  },
  keep: {
    name: 'Keep',
    endpoint: 'Keeps',
    useCustomRoutes: true
    
  },

  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}