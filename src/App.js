import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header.js';


/* 
  * Этот файл содержит основной компонент App который мы экспортим в index.js
  * import 'название файла' from './' - путь к нашему файлу
  * компонента - это ф-ция возвращающая разметку JSX*/


const App = () => {
  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <Profile/>
      </div>   
  );
}

/* 
Для того чтоб другие файлы могли импортить компоненты из этого файла нужно прописать для них экспорт,
этим мы скажем что хотим исспользовать экспортируемые компоненты в других файлах*/
export default App;
          
