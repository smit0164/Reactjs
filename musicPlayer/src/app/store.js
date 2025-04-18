import { configureStore } from '@reduxjs/toolkit';
import playerReducer from '../features/playerSlice'; // make sure to import this correctly
import playlistReducer from '../features/playlistSlice'
export const store = configureStore({
    reducer: {
      player: playerReducer,
      playlist:playlistReducer,
    },
  });
  
