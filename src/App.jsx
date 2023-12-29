import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import "./store/index";

export default function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {};

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
