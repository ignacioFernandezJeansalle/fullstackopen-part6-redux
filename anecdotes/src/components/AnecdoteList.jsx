import { useSelector, useDispatch } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
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
    const filteredAnecdotes = filter === "" ? anecdotes : anecdotes.filter((a) => a.content.includes(filter));
    return filteredAnecdotes.toSorted((a, b) => b.votes - a.votes);
  });

  const dispatch = useDispatch();

  const handleClick = (id) => {
    dispatch(addVote(id));
    const votedAnecdote = anecdotes.find((anecdote) => anecdote.id === id);
    setNotificationWithTime(dispatch, `You voted: "${votedAnecdote.content}"`);
  };

  return (
    <section className="anecdotes-list-container">
      <ul className="anecdotes-list">
        {anecdotes.map((anecdote) => (
          <AnecdoteListItem key={anecdote.id} anecdote={anecdote} handleClick={() => handleClick(anecdote.id)} />
        ))}
      </ul>
    </section>
  );
};

export default AnecdoteList;
