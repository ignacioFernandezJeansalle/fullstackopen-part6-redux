import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes";

export const getAnecdotes = () => {
  return axios.get(baseUrl).then((response) => response.data);
};

export const createAnecdote = (content) => {
  const id = (100000 * Math.random()).toFixed(0);
  const newAnecdote = { content, id, votes: 0 };

  return axios.post(baseUrl, newAnecdote).then((response) => response.data);
};
