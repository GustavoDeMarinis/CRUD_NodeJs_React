import axios from 'axios';
import { setTaskList } from '../store/slices/tasks';

const BACKURL = 'http://localhost:4000/task';

export const getTasks = () => (dispatch) => {
  axios.get(BACKURL).then((response) => {
    dispatch(setTaskList(response.data.tasks));
  });
};

export const createTask = (payload) => {
  return axios.post(`${BACKURL}/create`, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const updateTask = (id, values) => {
  return axios.put(`${BACKURL}/update/${id}`, values, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const deleteTask = (id) => {
  return axios.delete(`${BACKURL}/delete/${id}`);
};
