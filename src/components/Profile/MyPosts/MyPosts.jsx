import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

/* 
React позволяет делать модульный css.
Он сгенерирует уникальный css-класс для этого компонента.
Импортим его как обьект s и далее обращаемся как к свойствам (s.main)*/

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
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