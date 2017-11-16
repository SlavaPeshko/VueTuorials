<template>
  <div class='ui centered card'>
    <div class="content" v-show="!isEditing">
      <div class='header'>
          {{ todo.project }}
      </div>
      <div class='meta'>
          {{ todo.title }}
      </div>
      <div class='extra content'>
          <span class='right floated edit icon' v-on:click="showForm">
          <i class='edit icon'></i>
        </span>
        <span class='right floated trash icon' v-on:click="deleteTodo(todo.id)">
        <i class='trash icon'></i>
        </span>
      </div>
    </div>
    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Project</label>
          <input type='text' v-model="editatableTodo.project" >
        </div>
        <div class='field'>
          <label>Title</label>
          <input type='text' v-model="editatableTodo.title" >
        </div>
        <div class='ui two button attached buttons'>
          <button class='ui basic blue button' v-on:click="editTodo">
            Close X
          </button>
        </div>
      </div>
    </div>
    <div class='ui bottom attached green basic button' v-show="!isEditing &&todo.isCompleted" disabled>
        Completed
    </div>
    <div class='ui bottom attached red basic button' v-on:click="completeTodo(editatableTodo)" v-show="!isEditing && !todo.isCompleted">
        Pending
    </div>
  </div>
</template>

<script>

export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false,
      editatableTodo: {
        userId: this.todo.userId,
        title: this.todo.title,
        project: this.todo.project,
        isComplited: this.todo.isComplited,
      },
    };
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch('deleteTodo', id);
    },
    completeTodo(todo) {
      this.$store.dispatch('completeTodo', todo);
    },
    editTodo() {
      this.$store.dispatch('editTodo', this.editatableTodo,
         );
      this.isEditing = false;
    },
    showForm() {
      this.isEditing = true;
    },
  },
};
</script>