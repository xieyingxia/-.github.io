import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
//redux
import {createStore,applyMiddleware} from "redux"
import {composeWithDevTools} from 'redux-devtools-extension'
import logger from "redux-logger"
import thunk from "redux-thunk"

import { Provider } from "react-redux"
import allReducer from "./store/reducers"
import "./static/javascript/rem"
import "./static/css/main.less"
import 'antd-mobile/dist/antd-mobile.css'




//创建store 仓库
const store = createStore(allReducer,{},composeWithDevTools(applyMiddleware(logger,thunk)))// 来存放应用的状态。
// store.subscribe(() => console.log("state",store.getState())) //注册监听器;


ReactDOM.render(
    <Provider store= {store}>        
      <App/>
    </Provider> 
    , document.getElementById('root')
);

