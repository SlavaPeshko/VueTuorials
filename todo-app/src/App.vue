<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
  </div>
</template>

<script>
import axios from 'axios';
import TodoList from './components/TodoList';
import CreateTodo from './components/CreateTodo';

export default {
  name: 'app',
  components: {
    TodoList,
    CreateTodo,
  },
  data() {
    return {
      todos: [],
      errors: [],
    };
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos', { headers: {
      'Content-Type': 'application/json',
    } })
    .then((response) => {
      this.todos = response.data;
    })
    .catch((e) => {
      this.errors.push(e);
    });
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push(
        newTodo,
      );
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        newTodo,
      })
      .then(/*(response) => {}*/)
      .catch((e) => {
        this.errors.push(e);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
