import { usersAPI, profileAPI } from "../api/api.js";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
let initialState = {
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile };
        }
        case SET_STATUS: {
            return { ...state, status: action.status };
        }
        default:
            return state;
    }
};
export const setUserStatus = (status) => ({ type: SET_STATUS, status });
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((data) => {
            dispatch(setUserStatus(data));
        });
    };
};
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserStatus(data));
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

export default profileReducer;
