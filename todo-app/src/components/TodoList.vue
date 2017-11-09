<template>
  <div>
    <!-- <p>Completed Tasks: {{todos.filter(todo => {return todo.completed === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.completed === false}).length}}</p> -->
    <p>Completed Task: {{ completedTask }}</p>
    <p>Pending Tasks: {{ pendingTask }}</p>
    <todo  v-on:delete-todo="deleteTodo" v-on:complete-todo="completeTodo" v-for="(todo, index) in todos"  :key="index" v-bind:todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >

// import axios from 'axios';
import { mapGetters, mapState } from 'vuex';
import Todo from './Todo';

export default {
  // props: ['todos'],
  components: {
    Todo,
  },
  computed: {
    ...mapGetters([
      'completedTask',
      'pendingTask',
    ]),
    ...mapState([
      'todos',
    ]),
  },
  // methods: {
  //   deleteTodo(todo) {
  //     const todoIndex = this.todos.indexOf(todo);
  //     // const todoIndex = this.todos.indexOf(todo);
  //     this.todos.splice(todoIndex, 1);
  //     axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoIndex + 1}`)
  //     .then()
  //     .catch(e => this.errors.push(e));
  //   },

  //   completeTodo(todo) {
  //     const todoIndex = this.todos.indexOf(todo);
  //     this.todos[todoIndex].completed = true;
  //   },
  // },
};
</script>
<style>

</style>