import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import "./AnecdoteList.css";

const AnecdoteListItem = ({ anecdote, handleClick }) => {
  return (
    <li className="anecdotes-list-item" key={anecdote.id}>
      <p className="anecdotes-list-item-content">{anecdote.content}</p>
      <div className="anecdotes-list-item-votes">
        has: {anecdote.votes}
        <button onClick={handleClick}>Vote</button>
      </div>
    </li>
  );
};

const AnecdoteList = () => {
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    const filteredAnecdotes = filter === "" ? anecdotes : anecdotes.filter((a) => a.content.includes(filter));
    return filteredAnecdotes.toSorted((a, b) => b.votes - a.votes);
  });

  const dispatch = useDispatch();

  return (
    <section className="anecdotes-list-container">
      <ul className="anecdotes-list">
        {anecdotes.map((anecdote) => (
          <AnecdoteListItem key={anecdote.id} anecdote={anecdote} handleClick={() => dispatch(addVote(anecdote.id))} />
        ))}
      </ul>
    </section>
  );
};

export default AnecdoteList;
