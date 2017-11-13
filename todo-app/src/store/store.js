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
        commit('CREATE_TODO', newTodo);
      }, (error) => {
        console.log(error);
      });
    },
    editTodo: ({ commit }, todo) => {
      api.editTodo(todo).then((data) => {
        commit('EDIT_TODO', todo);
      }, (error) => {
        console.log(error);
      });
    },
    showForm: ({ commit }, isEditing) => {
      commit('SHOW_FORM', isEditing);
    },
    completeTodo: ({ commit }, todo) => {
      commit('COMPLETE_TODO', todo);
    },
  },
  mutations: {
    GET_TODO: (state, todo) => {
      state.todos = todo;
    },
    DELETE_TODO: (state, id) => {
      const todoIndex = state.todos.findIndex((todo) => todo.id === id);
      state.todos.splice(todoIndex, 1);
    },
    CREATE_TODO: (state, newTodo) => {
      state.todos.push(newTodo);
    },
    EDIT_TODO: (state, todo) => {
      let newTodo = state.todos.find((todo) => todo.id === todo.id);
      newTodo = todo;
    },
    SHOW_FORM: (state, isEditing) => {
      isEditing = true;
    },
    COMPLETE_TODO: (state, todo) => {
      todo.completed = true;
    },
  },
  getters: {
    completedTask: (state) => state.todos.filter((todo) => todo.completed === true).length,
    pendingTask: (state) => state.todos.filter((todo) => todo.completed === false).length,
    allTodos: (state) => state.todos,
  },
});

export default store;
