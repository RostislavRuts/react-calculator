import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header.js';
import Dialogs from './components/Dialogs/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';


/* 
  * Этот файл содержит основной компонент App который мы экспортим в index.js
  * import 'название файла' from './' - путь к нашему файлу
  * компонента - это ф-ция возвращающая разметку JSX
  * JSX - позволяет исспользовать разметку HTML внутри JavaScript
  * Ссылки дублируются в Navbar.jsx
  * Они работают с помощью пакета react-router-dom (см.package.json)*/


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route /* exact */ path="/dialogs" component={Dialogs}/>
          <Route /* exact */ path="/profile" component={Profile}/>
        </div>
      </div>
      </BrowserRouter>   
  );
}

/* 
Для того чтоб другие файлы могли импортить компоненты из этого файла нужно прописать для них экспорт,
этим мы скажем что хотим исспользовать экспортируемые компоненты в других файлах*/
export default App;
          
