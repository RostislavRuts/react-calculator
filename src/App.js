import React from 'react';
import './App.css';
import Calc from './components/calculator/calc';
//import ToDoList from './components/TodoList/ToDoList';



/* 
  * Этот файл содержит основной компонент App который мы экспортим в index.js
  * import 'название файла' from './' - путь к нашему файлу
  * компонента - это ф-ция возвращающая разметку JSX
  * JSX - позволяет исспользовать разметку HTML внутри JavaScript
*/


const App = () => {
  return (
    <div>
      <h1>User Application</h1>
      <h3>Create your notes quickly and easily</h3>
      {/* <ToDoList/> */}
      <Calc/>
    </div>
  );
}

/* 
Для того чтоб другие файлы могли импортить компоненты из этого файла нужно прописать для них экспорт,
этим мы скажем что хотим исспользовать экспортируемые компоненты в других файлах*/
export default App;
          
