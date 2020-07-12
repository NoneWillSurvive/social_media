import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

// const MyPostsContainer = (props) => {
//
//     let state = props.store.getState();
//
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }
//
//     let onPostChange = (text) => {
//         props.store.dispatch(updatePostMessageActionCreator(text));
//     }
//
//     return (
//         <MyPosts posts = {state.profilePage.posts}
//                  newPostText={state.profilePage.newPostText}
//                  addPost={addPost}
//                  onPostChange={onPostChange}
//         />
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {
            dispatch(updatePostMessageActionCreator(text));
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
