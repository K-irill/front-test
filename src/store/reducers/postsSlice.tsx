import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts } from "../../types";
import { fetchPosts } from "./actionCreators";

interface IPostsState {
  posts: IPosts[];
  postsPerPage: number;
  isLoading: boolean;
  error: string;
}

const initialState: IPostsState = {
  posts: [],
  postsPerPage: 10,
  isLoading: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    sortPosts(state) {
      state.posts.sort((a, b) => {
        if (a.body < b.body) {
          return -1;
        }
        if (a.body > b.body) {
          return 1;
        }
        return 0;
      });
    },
  },

  extraReducers: {
    [fetchPosts.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<IPosts[]>) => {
      state.isLoading = false;
      state.error = "";
      state.posts = action.payload;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
