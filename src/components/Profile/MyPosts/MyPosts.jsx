import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let posts = props.posts;
    let postsElements = posts.map( (element) => <Post message={element.message} likesCount={element.likesCount} /> );

    let addPost = () => {
        props.addPost();
        //props.dispatch(addPostActionCreator());
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.onPostChange(text);
        //props.dispatch(updatePostMessageActionCreator(text));
    }

    // let text = addPostElem.current.value;

    return (
        <div className={s.container}>
            <span><h3>My posts</h3></span>
            <div>
                <div> <textarea onChange={onPostChange} value={props.newPostText}></textarea> </div>
                <div> <button onClick={addPost}>Add post</button> </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;
