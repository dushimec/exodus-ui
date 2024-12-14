// slices/post.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  createPost,
  getPosts,
  getPostById,
  likeThePost,
  postComment,
  getPostsByDestination,
  getUpcomingPosts,
  getMostVisitedPosts,
  getMostLikedPosts,
  editPost,
  deletePost,
  replyToComment,
  editComment,
  deleteComment,
} from '../services/api';

export const createPostThunk = createAsyncThunk('posts/createPost', async (postData) => {
  const response = await createPost(postData);
  return response;
});

export const getPostsThunk = createAsyncThunk('posts/getPosts', async () => {
  const response = await getPosts();
  return response;
});

export const getPostByIdThunk = createAsyncThunk('posts/getPostById', async (id) => {
  const response = await getPostById(id);
  return response;
});

export const likePostThunk = createAsyncThunk('posts/likePost', async ({ postId, commentId }) => {
  const response = await likeThePost(postId, commentId);
  return response });
  
export const postCommentThunk = createAsyncThunk('posts/postComment', async ({ postId, commentData }) => {
  const response = await postComment(postId, commentData);
  return response;
});

export const getPostsByDestinationThunk = createAsyncThunk('posts/getPostsByDestination', async (destination) => {
  const response = await getPostsByDestination(destination);
  return response;
});

export const getUpcomingPostsThunk = createAsyncThunk('posts/getUpcomingPosts', async () => {
  const response = await getUpcomingPosts();
  return response;
});

export const getMostVisitedPostsThunk = createAsyncThunk('posts/getMostVisitedPosts', async () => {
  const response = await getMostVisitedPosts();
  return response;
});

export const getMostLikedPostsThunk = createAsyncThunk('posts/getMostLikedPosts', async () => {
  const response = await getMostLikedPosts();
  return response;
});

export const editPostThunk = createAsyncThunk('posts/editPost', async ({ id, postData }) => {
  const response = await editPost(id, postData);
  return response;
});

export const deletePostThunk = createAsyncThunk('posts/deletePost', async (id) => {
  const response = await deletePost(id);
  return response;
});

export const replyToCommentThunk = createAsyncThunk('posts/replyToComment', async ({ postId, commentId, replyData }) => {
  const response = await replyToComment(postId, commentId, replyData);
  return response;
});

export const editCommentThunk = createAsyncThunk('posts/editComment', async ({ postId, commentId, commentData }) => {
  const response = await editComment(postId, commentId, commentData);
  return response;
});

export const deleteCommentThunk = createAsyncThunk('posts/deleteComment', async ({ postId, commentId }) => {
  const response = await deleteComment(postId, commentId);
  return response;
});

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPostsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getPostByIdThunk.fulfilled, (state, action) => {
        state.post = action.payload;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.posts.push(action.payload);
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.posts = state.posts.filter(post => post.id !== action.payload.id);
      })
      .addCase(getUpcomingPostsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUpcomingPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getUpcomingPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectPosts = (state) => state.posts.posts;
export const selectPost = (state) => state.posts.post;
export const selectLoading = (state) => state.posts.loading;
export const selectError = (state) => state.posts.error;

export default postSlice.reducer;