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
});

const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});

export const { addSong, removeSong } = songSlice.actions;
export { store };
