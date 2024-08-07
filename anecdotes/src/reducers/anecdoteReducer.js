import { createSlice } from "@reduxjs/toolkit";
import anecdotesService from "../services/anecdotesService";

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState: [],
  reducers: {
    modifyAnecdote: (state, action) => {
      const modifiedAnecdote = action.payload;
      return state.map((anecdote) => (anecdote.id !== modifiedAnecdote.id ? anecdote : modifiedAnecdote));
    },
    appendAnecdote: (state, action) => state.concat(action.payload),
    setAnecdotes: (state, action) => action.payload,
  },
});

export const { modifyAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdotesService.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const createdAnecdote = await anecdotesService.createNew(content);
    dispatch(appendAnecdote(createdAnecdote));
  };
};

export const updateAnecdote = (anecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.update(anecdote);
    dispatch(modifyAnecdote(updatedAnecdote));
  };
};

export default anecdoteSlice.reducer;
