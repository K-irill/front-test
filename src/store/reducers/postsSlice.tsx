import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPosts } from "../../types";
import { fetchPosts } from "./actionCreators";

interface IPostsState {
  backPosts: IPosts[];
  posts: IPosts[];
  filtredPosts: IPosts[];
  postsPerPage: number;
  isLoading: boolean;
  sortIdFlag: boolean;
  sortTitleFlag: boolean;
  sortBodyFlag: boolean;
  error: string;
}

const initialState: IPostsState = {
  backPosts: [],
  posts: [],
  filtredPosts: [],
  postsPerPage: 10,
  isLoading: false,
  sortIdFlag: false,
  sortTitleFlag: false,
  sortBodyFlag: false,
  error: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    filtredInput(state, action: PayloadAction<string>) {
      if (action.payload === "") {
        state.posts = state.backPosts;
      } else {
        state.posts = state.filtredPosts.filter(
          (post) =>
            post.id === Number(action.payload) ||
            post.body.replace(/\s+/g, "").trim() ===
              action.payload.replace(/\s+/g, "") ||
            post.title.replace(/\s+/g, "").trim() ===
              action.payload.replace(/\s+/g, "")
        );
      }
    },
    sortId(state) {
      if (state.sortIdFlag) {
        state.sortIdFlag = false;

        state.posts.sort((a, b) => {
          if (a.id < b.id) {
            return -1;
          }
          if (a.id > b.id) {
            return 1;
          }
          return 0;
        });
      } else {
        state.posts.sort((a, b) => {
          state.sortIdFlag = true;

          if (a.id < b.id) {
            return 1;
          }
          if (a.id > b.id) {
            return -1;
          }
          return 0;
        });
      }
    },
    sortTitle(state) {
      if (state.sortTitleFlag) {
        state.sortTitleFlag = false;

        state.posts.sort((a, b) => {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
      } else {
        state.posts.sort((a, b) => {
          state.sortTitleFlag = true;

          if (a.title < b.title) {
            return 1;
          }
          if (a.title > b.title) {
            return -1;
          }
          return 0;
        });
      }
    },
    sortBody(state) {
      if (state.sortBodyFlag) {
        state.sortBodyFlag = false;

        state.posts.sort((a, b) => {
          if (a.body < b.body) {
            return -1;
          }
          if (a.body > b.body) {
            return 1;
          }
          return 0;
        });
      } else {
        state.posts.sort((a, b) => {
          state.sortBodyFlag = true;

          if (a.body < b.body) {
            return 1;
          }
          if (a.body > b.body) {
            return -1;
          }
          return 0;
        });
      }
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
      state.filtredPosts = action.payload;
      state.backPosts = action.payload;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postsSlice.reducer;
