import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './features/rocketsReducer';
import missionsReducer from './features/missionReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
