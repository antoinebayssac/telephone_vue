import { createStore } from 'vuex'


export default createStore({
  state: {
    contacts: [],
    callHistory: [],
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },

    AddCall(state, callHistory) {
      console.log(callHistory)
      state.callHistory.push(callHistory)
    },

  },
  actions: {
  },
  modules: {
  }
})
