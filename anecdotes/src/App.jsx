import { useSelector, useDispatch } from "react-redux";
import { addVote } from "./reducers/anecdoteReducer";
import AnecdoteForm from "./components/AnecdoteForm";

import "./App.css";

const App = () => {
  const anecdotes = useSelector((state) => state.toSorted((a, b) => b.votes - a.votes));

  const dispatch = useDispatch();

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

        <AnecdoteForm />
      </main>
    </>
  );
};

export default App;
