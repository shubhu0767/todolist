import logo from "./logo.svg";
import "./App.css";
import TodoList from "./Component/TodoList";
import { useSQLite, SQLiteHook } from "react-sqlite-hook";

export let sqlite;

function App() {
  sqlite = useSQLite();
  console.log("available :" + sqlite.isAvailable);

  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
