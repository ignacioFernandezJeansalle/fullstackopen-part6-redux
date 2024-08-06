import Filter from "./components/Filter";
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";

import "./App.css";

const App = () => {
  return (
    <>
      <header>
        <h1>Anecdotes</h1>
      </header>
      <main>
        <Filter />
        <AnecdoteList />
        <AnecdoteForm />
        <Notification />
      </main>
    </>
  );
};

export default App;
