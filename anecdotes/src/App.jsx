import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";

import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Anecdotes</h1>
      </header>
      <main>
        <AnecdoteList />
        <AnecdoteForm />
      </main>
    </>
  );
};

export default App;
