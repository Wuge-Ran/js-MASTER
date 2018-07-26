import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import './css/index.css';
import {createStore} from 'redux';
import reducer from './reducer/reducer';


let data ={
  hash:'all',
  list:[
    {
      id:1001,
      value:'1',
      checked:true,
    },{
      id:1002,
      value:'2',
      checked:true,
    }
  ]
}

const store = createStore(reducer,data,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
)
