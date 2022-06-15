import profileReducer, {addPost} from "./profile-reducer";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App.jsx';

it('New post should be added', () => {
    let action = addPost('newPostText');
    let state = {
        profile: null,
        status: "",
        posts: [
            {id: 1, message: 'First post', likesCount: 12},
        ]
    };
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});



