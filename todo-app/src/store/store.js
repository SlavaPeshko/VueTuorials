import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api/api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [],
    newTodo: '',
  },
  actions: {
    getTodo: ({ commit }) => {
      api.getTodos().then((data) => {
        commit('GET_TODO', data);
      }, (err) => {
        console.log(err);
      });
    },
    deleteTodo: ({ commit }, id) => {
      api.deleteTodo(id).then((data) => {
        commit('DELETE_TODO', id);
      }, (error) => {
        console.log(error);
      });
    },
    createTodo: ({ commit }, newTodo) => {
      api.createTodo(newTodo).then((data) => {
        commit('CREATE_TODO');
      }, (error) => {
        console.log(error);
      });
    },
    // createTodo: ({ commit }, todo) => commit('createTodo', todo),
    showForm: ({ commit }, isEditing) => commit('showForm', isEditing),
    hideForm: ({ commit }, isEditing) => commit('hideForm', isEditing),
    completeTodo: ({ commit }, todo) => commit('completeTodo', todo),
  },
  mutations: {
    GET_TODO: (state, todo) => {
      state.todos = todo;
    },
    DELETE_TODO: (state, id) => {
      const todoIndex = state.todos.filter((todo) => todo.id !== id);
      state.todos.splice(todoIndex, 1);
    },
    CREATE_TODO: (state) => {
      state.todos.push({
        body: state.newTodo,
        completed: false,
      });
    },
    showForm: (state, isEditing) => {
      isEditing = true;
    },
    hideForm: (state, isEditing) => {
      isEditing = false;
    },
    completeTodo: (state, todo) => {
      todo.completed = true;
    },
  },
  getters: {
    completedTask: (state) => state.todos.filter((todo) => todo.completed === true).length,
    pendingTask: (state) => state.todos.filter((todo) => todo.completed === false).length,
    allTodos: (state) => state.todos,
    newTodo: (state) => state.newTodo,
  },
});

export default store;
