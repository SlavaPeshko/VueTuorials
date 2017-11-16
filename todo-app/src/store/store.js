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
      });
    },
    deleteTodo: ({ commit }, id) => {
      api.deleteTodo(id).then(() => {
        commit('DELETE_TODO', id);
      });
    },
    createTodo: ({ commit }, todo) => {
      api.createTodo(todo).then((todo) => {
        commit('CREATE_TODO', todo);
      });
    },
    editTodo: ({ commit }, todo) => {
      api.editTodo(todo).then((todo) => {
        commit('EDIT_TODO', todo);
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
      const newTodo = state.todos.find((todo) => todo.id === todo.id);
      newTodo.userId = todo.userId;
      newTodo.title = todo.title;
      newTodo.project = todo.project;
      newTodo.isCompleted = todo.isCompleted;
      return newTodo;
    },
    SHOW_FORM: (state, isEditing) => {
      isEditing = true;
      return isEditing;
    },
    COMPLETE_TODO: (state, todo) => {
      todo.isCompleted = true;
    },
  },
  getters: {
    completedTask: (state) => state.todos.filter((todo) => todo.isCompleted === true).length,
    pendingTask: (state) => state.todos.filter((todo) => todo.isCompleted === false).length,
    allTodos: (state) => state.todos,
  },
});

export default store;
