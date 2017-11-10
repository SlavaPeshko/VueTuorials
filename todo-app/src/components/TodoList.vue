<template>
  <div>
    <p>Completed Task: {{ completedTask }}</p>
    <p>Pending Tasks: {{ pendingTask }}</p>
    <todo v-for="(todo, index) in todos"  :key="index" v-bind:todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >
import Todo from './Todo';

export default {
  components: {
    Todo,
  },
  computed: {
    todos() {
      return this.$store.getters.allTodos;
    },
    completedTask() {
      return this.$store.getters.completedTask;
    },
    pendingTask() {
      return this.$store.getters.pendingTask;
    },
  },
  created() {
    this.$store.dispatch('getTodo');
  },
};
</script>
<style>

</style>