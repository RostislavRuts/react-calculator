import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './Profileinfo/ProfileInfo';

/* 
React позволяет делать модульный css.
Он сгенерирует уникальный css-класс для этого компонента.
Импортим его как обьект s и далее обращаемся как к свойствам (s.main)*/

const Profile = () => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts/>
    </div>
  );
}

export default Profile;