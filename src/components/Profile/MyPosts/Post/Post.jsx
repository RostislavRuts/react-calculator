import React from 'react';
import s from './Post.module.css';

/* 
React позволяет делать модульный css.
Он сгенерирует уникальный css-класс для этого компонента.
Импортим его как обьект s и далее обращаемся как к свойствам (s.main)*/

const Post = (props) => {
  //console.log(props.message);
  return (
    <div className={s.item}>
     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYHKqgTgmlNSmZHRMKxa-RxcYHIQTmiKxXHXb3O7jKUM4nDJn5&usqp=CAU" alt="#"/>
      {props.message}
      <div>
        <span>Like</span>
      </div>
    </div>
  );
}

export default Post;