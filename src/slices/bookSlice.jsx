import { createSlice } from "@reduxjs/toolkit";
import api from "../Instance/bookInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// fetchBooks from the api/read
export const fetchbooks = createAsyncThunk(
  "book/fetchbooks",
  async (_, thunkApi) => {
    try {
      const res = await api.get("/books");
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error?.message, "error in the api");
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

// delete books from teh api
export const deletebooks = createAsyncThunk(
  "book/deletebooks",
  async (id, thunkApi) => {
    try {
      const res = await api.delete(`/books/${id}`);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      throw thunkApi.rejectWithValue(error?.message);
    }
  }
);

// slice of the book
const bookSlice = createSlice({
  name: "book",
  initialState: {
    bookData: [],
    isLoading: true,
    error: "",
  },

  extraReducers(builder) {
    builder
      .addCase(fetchbooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchbooks.fulfilled, (state, action) => {
        console.log(action.payload);
        (state.bookData = action.payload), (state.isLoading = false);
      })
      .addCase(fetchbooks.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload, "sdfsfsa");
        state.error = action.payload;
      })
      .addCase(deletebooks.pending,(state)=>{
        state.isLoading=true
      })
      .addCase(deletebooks.fulfilled,(state,action)=>{
        state.bookData=state.bookData.filter((book)=>book.id!==action.payload.id)
        state.isLoading=false
      })
      .addCase(deletebooks.rejected,(state,action)=>{
        state.isLoading=false
        state.error=action.payload
      })
  },
});

export const bookReducer = bookSlice.reducer;
