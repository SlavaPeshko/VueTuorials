import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

const getAllTodo = function (url, request) {
  return axios.get(url, request)
  .then(response => Promise.resolve(response.body.data))
  .catch(error => Promise.reject(error));
};

const postTodo = function (url, request) {
  return axios.post(url, request)
  .then(response => Promise.resolve(response))
  .catch(error => Promise.reject(error));
};

const deleteTodo = function (url, request) {
  return axios.delete(url, request)
  .then(response => Promise.resolve(response))
  .catch(error => Promise.reject(error));
};

const putTodo = function (url, request) {
  return axios.put(url, request)
  .then(response => Promise.resolve(response))
  .catch(error => Promise.reject(error));
};

export default{
  getAllTodo,
  postTodo,
  deleteTodo,
  putTodo,
};

// const getAll = () => axios.get(url);
// const update = toUpdate => axios.put(url, toUpdate);
// const create = toCreate => axios.create(url, toCreate);

// export default {
//   posts(url) {
//     return {
//       getAll: () => axios.get(url),
//       update: toUpdate => axios.put(url, toUpdate),
//       create: toCreate => axios.put(url, toCreate),
//       delete: ({ id }) => axios.delete(`${url}/${id}`),
//     };
//   },
// };
