import { createSlice } from "@reduxjs/toolkit";
import { movieSlice } from "./MovieSlice";
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

export { songSlice };
export const { addSong, removeSong } = songSlice.actions;
