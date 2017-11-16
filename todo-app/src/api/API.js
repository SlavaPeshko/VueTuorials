import axios from 'axios';

const url = 'http://localhost:50314/api/todoes';

export default {
  getTodos() {
    return axios.get(`${url}`)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => console.log(error));
  },
  deleteTodo(id) {
    return axios.delete(`${url}/${id}`)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => console.log(error));
  },
  createTodo(newTodo) {
    return axios.post(`${url}`, newTodo)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => console.log(error));
  },
  editTodo(todo) {
    return axios.put(`${url}/${todo.id}`, todo)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => console.log(error));
  },
};

