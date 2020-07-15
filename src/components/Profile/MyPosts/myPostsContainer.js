import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updatePostMessageActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";


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

//const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
