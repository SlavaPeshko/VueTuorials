import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
  },
  actions: {
    LOAD_TODOS_LIST({ commit }) {
      axios.get('https://jsonplaceholder.typicode.com/todos').then((response) => {
        commit('SET_TODOS_LIST', { list: response.data });
      }, (err) => {
        console.log(err);
      });
    },
  },
  mutations: {
    SET_TODOS_LIST: (state, { list }) => {
      state.todos = list;
    },
  },
  getters: {
    completedTask: state => state.todos.filter(todo => todo.completed === true).length,
    pendingTask: state => state.todos.filter(todo => todo.completed === false).length,
  },
});

export default store;
