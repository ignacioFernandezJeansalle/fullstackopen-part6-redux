import { useDispatch } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationWithTime } from "../reducers/notificationReducer";

import "./AnecdoteForm.css";

const AnecdoteForm = () => {
  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(createAnecdote(content));
    setNotificationWithTime(dispatch, `You created: "${content}"`);
    event.target.anecdote.value = "";
  };

  return (
    <section className="anecdote-form-container">
      <h2>Create new</h2>
      <form className="anecdote-form" onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default AnecdoteForm;
