import { configureStore } from "@reduxjs/toolkit";
import { songSlice, addSong, removeSong } from "./slices/SongSlice";
import {
  movieSlice,
  addMovie,
  removeMovie,
  resetMovies,
} from "./slices/MovieSlice";

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export {
  store,
  addSong,
  addMovie,
  removeSong,
  removeMovie,
  resetMovies,
  movieSlice,
};
