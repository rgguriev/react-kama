import {ProfileAPI as profileAPI, UsersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 2},
    {id: 2, message: 'Its my first post', likesCount: 4},
    {id: 3, message: 'Its my sec post', likesCount: 12},
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    default:
      return state;
  }
}

export const addPostAC = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const setUserProfile = (profile) =>
  ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) =>
  ({type: SET_STATUS, status})

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await UsersAPI.getProfile(userId);
  dispatch(setUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}


export default profileReducer;