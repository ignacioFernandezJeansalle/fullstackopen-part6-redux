import { useSelector, useDispatch } from "react-redux";
import { updateAnecdote } from "../reducers/anecdoteReducer";
import { setNotificationWithTime } from "../reducers/notificationReducer";

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
    return filter === "" ? anecdotes : anecdotes.filter((a) => a.content.includes(filter));
  });

  const dispatch = useDispatch();

  const handleClick = (id) => {
    const anecdote = anecdotes.find((anecdote) => anecdote.id === id);
    const votedAnecdote = { ...anecdote, votes: anecdote.votes + 1 };
    dispatch(updateAnecdote(votedAnecdote));
    dispatch(setNotificationWithTime(`You voted: "${votedAnecdote.content}"`, 5));
  };

  return (
    <section className="anecdotes-list-container">
      <ul className="anecdotes-list">
        {anecdotes
          .toSorted((a, b) => b.votes - a.votes)
          .map((anecdote) => (
            <AnecdoteListItem key={anecdote.id} anecdote={anecdote} handleClick={() => handleClick(anecdote.id)} />
          ))}
      </ul>
    </section>
  );
};

export default AnecdoteList;
