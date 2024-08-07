import { createSlice } from "@reduxjs/toolkit";

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
export default anecdoteSlice.reducer;
