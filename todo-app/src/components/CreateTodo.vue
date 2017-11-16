<template>
  <div class='ui basic content center aligned segment'>
    <button class='ui basic button icon' v-on:click="openForm" v-show="!isCreating">
      <i class='plus icon'></i>
    </button>
    <div class='ui centered card' v-show="isCreating">
      <div class='content'>
        <div class='ui form'>
          <div class='field'>
            <label>Project</label>
            <input v-model="projectText" type='text' ref='title' defaultValue="">
          </div>
          <div class='field'>
            <label>Title</label>
            <input v-model="titleText" type='text' ref='completed' defaultValue="">
          </div>
          <div class='ui two button attached buttons'>
            <button class='ui basic blue button' v-on:click="createTodo()">
              Create
            </button>
            <button class='ui basic red button' v-on:click="closeForm">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projectText: '',
      titleText: '',
      isCreating: false,
    };
  },
  methods: {
    openForm() {
      this.isCreating = true;
    },
    closeForm() {
      this.isCreating = false;
    },
    createTodo() {
      this.$store.dispatch('createTodo',
        {
          userId: 0,
          project: this.projectText,
          title: this.titleText,
          isCompleted: false,
        });
      this.projectText = '';
      this.titleText = '';
      this.isCreating = false;
    },
  },
};
</script>