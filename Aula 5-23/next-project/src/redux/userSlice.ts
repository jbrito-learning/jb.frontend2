import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Criar a ação assíncrona (Thunk)
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  return result.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: { users: [], status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export default usersSlice.reducer;
