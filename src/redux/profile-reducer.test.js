import profileReducer, {addPost} from "./profile-reducer";
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App/App.jsx';

it('New post should be added', () => {
    // 1 - create tests data
    let action = addPost('newPostText');
    let state = {
        profile: null,
        status: "",
        posts: [
            {id: 1, message: 'First post', likesCount: 12},
        ]
    };
    // 2 - start test func
    let newState = profileReducer(state, action);
    // 3 expected test ответ
    expect(newState.posts.length).toBe(2);
    // следующую проверку надо вынести в другую функцию.
    expect(newState.posts[1].message).toBe('newPostText');
});



