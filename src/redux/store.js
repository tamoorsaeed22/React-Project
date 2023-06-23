import { configureStore } from '@reduxjs/toolkit';
import rocketsReducer from './rocket/rocketsReducer';
import missionsReducer from './mission/missionReducer';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
});

export default store;
