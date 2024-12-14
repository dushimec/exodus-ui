// services/api.js
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_BASE_URL;

// Create a new post
export const createPost = async (postData) => {
  const response = await axios.post(`${API_URL}/posts/create`, postData);
  return response.data;
};

// Get all posts
export const getPosts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get a post by ID
export const getPostById = async (id) => {
  const response = await axios.get(`${API_URL}/posts/${id}`);
  return response.data;
};

// Like a post
export const likeThePost = async (postId, commentId) => {
  const response = await axios.put(`${API_URL}/posts/${postId}/like/${commentId}`);
  return response.data;
};

// Comment on a post
export const postComment = async (postId, commentData) => {
  const response = await axios.post(`${API_URL}/posts/${postId}/comment`, commentData);
  return response.data;
};

// Get posts by destination
export const getPostsByDestination = async (destination) => {
  const response = await axios.get(`${API_URL}/posts/destination/${destination}`);
  return response.data;
};

// Get upcoming posts
export const getUpcomingPosts = async () => {
  const response = await axios.get(`${API_URL}/posts/upcoming`);
  return response.data;
};

// Get most visited posts
export const getMostVisitedPosts = async () => {
  const response = await axios.get(`${API_URL}/posts/most-visited`);
  return response.data;
};

// Get most liked posts
export const getMostLikedPosts = async () => {
  const response = await axios.get(`${API_URL}/posts/most-liked`);
  return response.data;
};

// Edit a post
export const editPost = async (id, postData) => {
  const response = await axios.put(`${API_URL}/posts/${id}`, postData);
  return response.data;
};

// Delete a post
export const deletePost = async (id) => {
  const response = await axios.delete(`${API_URL}/posts/${id}`);
  return response.data;
};

// Reply to a comment
export const replyToComment = async (postId, commentId, replyData) => {
  const response = await axios.post(`${API_URL}/posts/${postId}/comments/${commentId}/replies`, replyData);
  return response.data;
};

// Edit a comment
export const editComment = async (postId, commentId, commentData) => {
  const response = await axios.put(`${API_URL}/posts/${postId}/comments/${commentId}`, commentData);
  return response.data;
};

// Delete a comment
export const deleteComment = async (postId, commentId) => {
  const response = await axios.delete(`${API_URL}/posts/${postId}/comments/${commentId}`);
  return response.data;
};