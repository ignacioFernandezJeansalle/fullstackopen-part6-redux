import { useQuery } from "@tanstack/react-query";
import { getAnecdotes } from "./requests";

import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";

const App = () => {
  const result = useQuery({
    queryKey: ["anecdotes"],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1,
  });

  /* console.log(JSON.parse(JSON.stringify(result))); */

  const { isLoading, isError, data, error } = result;

  if (isLoading) return <div>Loading data...</div>;

  if (isError) return <div>Anecdote service not available due to problems in server: {error.message}</div>;

  const anecdotes = data;

  const handleVote = (anecdote) => {
    console.log("vote");
  };

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <AnecdoteForm />

      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
