import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'samuraiNetwork/profileReducer/ADD-POST'
const ADD_LIKE = 'samuraiNetwork/profileReducer/ADD-LIKE'
const SET_USER_PROFILE = 'samuraiNetwork/profileReducer/SET_USER_PROFILE'
const SET_STATUS = 'samuraiNetwork/profileReducer/SET_STATUS'

let initialState = {
    postsData: [
        {id: 2, text: "Hey, why nobody loves me?", likes: 0},
        {id: 1, text: "It's our new program! Hey!", likes: 8}
    ],
    profile: null,
    status: '',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: state.postsData.length + 1,
                text: action.newPostText,
                likes: 0
            };
            return {
                ...state,
                postsData: [newPost, ...state.postsData],
                newPostText: ''
            };
        }
        case ADD_LIKE: {

            let stateCopy = {...state}
            let newLikesCount = action.likes + 1;
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.find(p => p.id === action.id).likes = newLikesCount;
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state;
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const addLike = (likesCount, id) => ({type: ADD_LIKE, likes: likesCount, id: id});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let data = await userAPI.watchProfile(userId)
    dispatch(setUserProfile(data))
}

export const getUserStatus = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}

export const updateUserStatus = (status) => async (dispatch) => {
    let data = await profileAPI.updateUserStatus(status)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(status))
    }
}

export default profileReducer