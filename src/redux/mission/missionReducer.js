import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const res = await fetch(missionsUrl);
    const missions = await res.json();
    const missionsList = missions.map((mission) => ({
      id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      joined: false,
    }));
    return missionsList;
  },
);

const missionsSlice = createSlice({
  name: 'missions',
  initialState: [],
  reducers: {
    joinMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, joined: !mission.joined };
      }
      return mission;
    }),
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { joinMission } = missionsSlice.actions;
export const selectMissions = (state) => state.missions;
export const selectState = (state) => state.missions;
export default missionsSlice.reducer;
