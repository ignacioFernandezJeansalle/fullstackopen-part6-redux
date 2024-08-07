import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotesService";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    addVote: (state, action) => {
      const id = action.payload;
      const anecdoteToChange = state.find((anecdote) => anecdote.id === id);
      const changedAnecdote = { ...anecdoteToChange, votes: anecdoteToChange.votes + 1 };
      return state.map((anecdote) => (anecdote.id !== id ? anecdote : changedAnecdote));
    },
    createAnecdote: (state, action) => state.concat(action.payload),
    setAnecdotes: (state, action) => action.payload,
  },
});

export const { addVote, createAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};
export default anecdoteSlice.reducer;
