import { useEffect } from "react";
import { useDispatch } from "react-redux";
import anecdoteService from "./services/anecdotesService";
import { setAnecdotes } from "./reducers/anecdoteReducer";

import Filter from "./components/Filter";
import AnecdoteList from "./components/AnecdoteList";
import AnecdoteForm from "./components/AnecdoteForm";
import Notification from "./components/Notification";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    anecdoteService.getAll().then((anecdotes) => {
      dispatch(setAnecdotes(anecdotes));
    });
  }, [dispatch]);

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
