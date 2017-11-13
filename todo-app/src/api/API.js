import axios from 'axios';

export default {
  getTodos() {
    return axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
  deleteTodo(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
  createTodo(newTodo) {
    return axios.post('https://jsonplaceholder.typicode.com/todos', {
      body: newTodo,
    })
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
  editTodo(todo) {
    return axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(error));
  },
};

