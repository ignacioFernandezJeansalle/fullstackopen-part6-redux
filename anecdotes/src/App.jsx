import { useSelector, useDispatch } from "react-redux";
import { addVote, createAnecdote } from "./reducers/anecdoteReducer";

import "./App.css";

const App = () => {
  const anecdotes = useSelector((state) => state.toSorted((a, b) => b.votes - a.votes));

  const dispatch = useDispatch();

  const addAnecdote = (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    dispatch(createAnecdote(content));
    event.target.anecdote.value = "";
  };

  const vote = (id) => {
    dispatch(addVote(id));
  };

  return (
    <>
      <header>
        <h1>Anecdotes</h1>
      </header>
      <main>
        <section className="anecdotes">
          <ul className="anecdotes-list">
            {anecdotes.map((anecdote) => (
              <li className="anecdotes-listitem" key={anecdote.id}>
                <p className="anecdotes-content">{anecdote.content}</p>
                <div className="anecdotes-votes">
                  has: {anecdote.votes}
                  <button onClick={() => vote(anecdote.id)}>Vote</button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="create">
          <h2>Create new</h2>
          <form className="create-form" onSubmit={addAnecdote}>
            <input name="anecdote" />
            <button type="submit">Create</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default App;
