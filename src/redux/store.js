import { configureStore } from '@reduxjs/toolkit';
import undraftedPlayersSlice from './undraftedPlayersSlice.js';


export const store = configureStore({
  reducer: {
    undraftedPlayers: undraftedPlayersSlice,
  },
})