import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const idx = state.indexOf(action.payload);
      state.splice(idx, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(movieSlice.actions.resetMovies, () => {
      return [];
    });
  },
});

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const idx = state.indexOf(action.payload);
      state.splice(idx, 1);
    },
    resetMovies() {
      return [];
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
    movies: movieSlice.reducer,
  },
});

export const { addSong, removeSong, resetSongs } = songSlice.actions;
export const { addMovie, removeMovie, resetMovies } = movieSlice.actions;
export { store };
