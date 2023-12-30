import { createSlice } from "@reduxjs/toolkit";

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

export { movieSlice };
export const { addMovie, removeMovie, resetMovies } = movieSlice.actions;
