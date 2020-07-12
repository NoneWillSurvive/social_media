export const addPostActionCreator = () => ({type: 'ADD-POST'});

export const updatePostMessageActionCreator = (text) =>
    ({type: 'UPDATE-POST-MESSAGE', newText: text});

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 223}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST' : {
            let newId = state.posts.length + 1;
            let newPost = {
                id: newId,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText:''
            };
        }
        case 'UPDATE-POST-MESSAGE' : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default :
            return state;
    }
};

export default profileReducer;
