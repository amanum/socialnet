import profileReducer, {addPost} from "./profileReducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";

it('new post should be added', () => {
    // 1. test data
    let action = addPost('it-kamasutra.com')
    let initialState = {
        postsData: [
            {id: 2, text: "Hey, why nobody loves me?", likes: 0},
            {id: 1, text: "It's our new program! Hey!", likes: 8}
        ],
        profile: null,
        status: '',
    }
    // 2. action
    let newState = profileReducer(initialState,action)
    // 3. expectation
    expect(newState.postsData.length).toBe(3)
});

it('text of new post should be correctgit', () => {
    // 1. test data
    let action = addPost('it-kamasutra.com')
    let initialState = {
        postsData: [
            {id: 2, text: "Hey, why nobody loves me?", likes: 0},
            {id: 1, text: "It's our new program! Hey!", likes: 8}
        ],
        profile: null,
        status: '',
    }
    // 2. action
    let newState = profileReducer(initialState,action)
    // 3. expectation
    expect(newState.postsData[0].text).toBe('it-kamasutra.com')
});