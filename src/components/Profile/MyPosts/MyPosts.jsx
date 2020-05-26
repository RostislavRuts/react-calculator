import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

/* 
React позволяет делать модульный css.
Он сгенерирует уникальный css-класс для этого компонента.
Импортим его как обьект s и далее обращаемся как к свойствам (s.main)*/

const MyPosts = () => {
  let postData = [
    {id: 0, message: 'Hi, how a u?', likesCount: 2},
    {id: 1, message: 'It\'s my first post', likesCount: 7},
    {id: 2, message: 'i, how a u?', likesCount: 34},
  ]
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea cols="20" rows="2"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
          <Post message="Hi, how a u?"/>
          <Post message="It's my first post"/>
      </div>
    </div>
  );
}

export default MyPosts;