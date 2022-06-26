import { usersAPI, profileAPI } from "../api/api.js";
import { stopSubmit } from "redux-form";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const ADD_NEW_POST = "ADD_NEW_POST";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
    profile: null,
    status: "",
    posts: [{ id: 1, message: "First post", likesCount: 12 }],
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        case ADD_NEW_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0,
            };
            return { ...state, posts: [...state.posts, newPost] };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter((p) => p.postId !== action.postId),
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos },
            };
        }
        default:
            return state;
    }
};
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});
export const addPost = (newPostText) => ({ type: ADD_NEW_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const savePhotoSuccess = (photos) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos,
});

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((data) => {
            dispatch(setStatus(data));
        });
    };
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
    };
};
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then((data) => {
            dispatch(setUserProfile(data));
        });
    };
};
export const savePhoto = (file) => {
    return (dispatch) => {
        profileAPI.savePhoto(file).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        });
    };
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        // dispatch(stopSubmit("profileEdit", { "contacts" : {"facebook" : response.data.messages[0] }})); // TODO динамически дял каждого поля
        dispatch(stopSubmit("profileEdit", { _error : response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
};

export default profileReducer;
