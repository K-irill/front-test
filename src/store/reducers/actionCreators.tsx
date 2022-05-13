import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IPosts } from "../../types";

export const fetchPosts = createAsyncThunk(
  "posts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IPosts[]>(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
