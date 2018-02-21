import axios from 'axios'
import vue from 'vue'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 10000,
  withCredentials: true
})

let auth = axios.create({
  baseURL: '//localhost:3000/',
  // baseURL: '//localhost:3000/',
  timeout: 2000,
  withCredentials: true
})
vue.use(vuex)

var store = new vuex.Store({
  state: {
    user: {},
    vaults: [],
    homekeeps: [],
    activeVault:{},
    activeKeep: {},
    loggedIn: false,
    registering: false,
    logging: false,
    error: {}
  },
  mutations: {
    setKeeps(state, data) {
      state.homekeeps = data
    },

    setVaults(state, data) {
      state.vaults = data
    },
    changeLog(state) {
      state.loggedIn = !state.loggedIn
    },

    reg(state) {
      state.registering = true
      state.logging = false
    },
    log(state) {

      state.registering = false
      state.logging = true
    },
    getAuth(state, user) {
      state.user = user

    },
    setActiveKeep(state, payload) {
      state.activeKeep = payload
    },
    setActiveVault(state, payload){
      state.activeVault = payload
    },
    handleError(state, err) {
      state.error = err
    },

  },
  actions: {

    login({ commit, dispatch }, obj) {

      auth.post("login", obj)
        .then((res) => {
          // console.log(res)
          // res = JSON.parse(res);
          if (res.data.message == "successfully logged in") {
            // router.push('users/' + res.data._id + '/home')
            dispatch('getKeepsHome')
            return console.log(res.data.message)
          } else {
            // dispatch('changeLog')
            alert("Invalid Email or password");
            return console.log(res.data.message)
          }

        })

    },
    register({ commit, dispatch }, obj) {
      auth.post("register", obj)
        .then((res) => {
          // console.log(res)
          // res = JSON.parse(res);
          if (res.data.message == "Successfully created user account") {
            console.log('account created')
            dispatch('changeLog')
            router.push('home')          
          } else if (res.error) {
            alert("Invalid Email or password");
          }
        })
        .catch(() => console.log('error'))
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then((res) => {
          console.log(res.data.message)
          // dispatch('changeLog')
          dispatch('getAuth')

        })
        .catch(() => console.log('error'))
    },
    reg({ commit, dispatch }) {
      commit('reg')
    },
    log({ commit, dispatch }) {
      commit('log')
    },
    changeLog({ commit, dispatch }) {
      commit('changeLog')
    },

    //login items ^^^^^^
    getAuth({ commit, dispatch }) {
      auth('authenticate')
        .then(res => {
          if (!res.data.data) {
            return router.push('/')
          }
          commit('getAuth', res.data.data)
          // stateuser = res.data.data
          commit('changeLog')
        })
        .catch(err => {
          console.log(err)
          router.push('/')
        })
    },

    getKeepsHome({ commit, dispatch }) {
      api(`home/`)
        .then(res => {
          commit('setKeeps', res.data.data)
          router.push(`home`)
        })
        // .then(res=>{

        // })
        // router.replace('userboards')


        .catch(err => {
          commit('handleError', err)
        })
    },
    postKeepHome({ commit, dispatch }, keep) {
      api.post('home/', keep)
        .then(res => {
          dispatch('getKeepsHome')
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    deleteKeepHome({commit, dispatch}, keep){
      api.delete(`home/${keep._id}`)
      .then(res => {
        dispatch('getKeepsHome', res.data)
      })
      .catch(err => {
        commit('handleError', error)
      })

    },
    getKeepHome({ commit, dispatch }, keepId) {
      api(`home/ + ${keep._id}`)
        .then(res => {
          commit('setActiveKeep', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getVaults({ commit, dispatch }, userId) {
      api(`vaults`)
        .then(res => {
          commit('setVaults', res.data.data)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    createVault({ commit, dispatch }, vault) {
      api.post(`vaults`, vault)
        .then(res => {
          dispatch('getVaults', vault.creatorId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    removeVault({ commit, dispatch }, vaultId) {
      // console.log(list)  
      
      api.delete(`vaults/${vault._id}`)
        .then(res => {
          dispatch('getVaults', vault.userId)
        })
        .catch(err => {
          commit('handleError', err)
        })
    },
    getVault({commit, dispatch}, vault){
      api(`vaults/${vault._id}`)
      .then(res => {
        commit('setActiveVault', res.data.data)
      })
      .catch(err => {
        commit('handleError', err)
      })
    },

  


  }






})
export default store

