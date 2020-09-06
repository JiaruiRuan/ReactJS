import React from 'react';
import ReactDOM from 'react-dom'; //in package.json
import './index.css';
import TodoList from './TodoList'; //./App == App.js


ReactDOM.render(
    <TodoList />,
  document.getElementById('root')
);


