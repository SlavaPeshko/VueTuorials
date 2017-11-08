import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
  },
  mutations: {
    GET_TODO(state, todo) {
      this.state.newTodo = todo;
    },
  },
  action: {
    getTodo({ commit }, todo) {
      commit('GET_TODO', todo);
    },
  },
});
