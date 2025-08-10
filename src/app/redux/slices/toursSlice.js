import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTours } from '../../services/api'

export const fetchTours = createAsyncThunk("tours/fetchTours", async () => {
  const res = await getTours();
  return res.data.data; // 'data' based on your API structure
});

const toursSlice = createSlice({
  name: "tours",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTours.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default toursSlice.reducer;
