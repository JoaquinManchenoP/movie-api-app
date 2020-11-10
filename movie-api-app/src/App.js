import logo from "./logo.svg";
import "./App.css";
import MovieCard from "./MovieCard/MovieCard";
import SearchMovie from "./SearchMovie";

function App() {
  return (
    <div className="App">
      <SearchMovie />
      <MovieCard />
    </div>
  );
}

export default App;
