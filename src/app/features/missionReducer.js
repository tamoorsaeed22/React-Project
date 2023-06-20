import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const missionsUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'missions/getMissions',
  async () => fetch(missionsUrl).then(
    (res) => res.json(),
  ),
);

const missionsSlice = createSlice({
  name: 'mission',
  initialState: [],
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
});

export default missionsSlice.reducer;
