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
    keeps: [],
    loggedIn: false,
    registering: false,
    logging: false
  },
  mutations: {

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

    }

  },
  actions: {

    login({ commit, dispatch }, obj) {
      debugger
      auth.post("login", obj)
        .then((res) => {
          // console.log(res)
          // res = JSON.parse(res);
          if (res.data.message == "successfully logged in") {
            // router.push('users/' + res.data._id + '/home')
            dispatch('getAuth')
            return console.log(res.data.message)
          } else {
            // dispatch('changeLog')
            return console.log(res.data.message)
          }

        })

    },
    register({ commit, dispatch }, obj) {
      auth.post("register", obj)
        .then((res) => {
          // console.log(res)
          // res = JSON.parse(res);
          if (res.data.message) {
            console.log('account created')
            dispatch('changeLog')
            router.push('userboards')
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
    getAuth({commit, dispatch}) {
      auth('authenticate')
      .then(res => {
        if (!res.data.data) {
          return router.push('/')
        }
          commit('getAuth', res.data.data)
          // stateuser = res.data.data
          router.push('users/' + res.data._id + '/home')
          // router.replace('userboards')
  
      })
        .catch(err => {
          console.log(err)
          router.push('/')
        })
    },
  }






})
export default store

