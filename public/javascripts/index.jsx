"use strict";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import { Provider } from "react-redux";
import Notes from "./container/app.jsx";
import rootReducer from "./reducer/reducer.jsx";

var loggerMiddleware = createLogger();

//创建携带所传入中间件的store
var createStoreWithMiddleware = applyMiddleware(thunkMiddleware, loggerMiddleware)(createStore);

var store = createStoreWithMiddleware(rootReducer);

//监听state的每一次变化，若调用所返回函数unsubscribe( )，则监听取消
var unsubscribe = store.subscribe( () => console.log(store.getState()) );

var rootElement = document.getElementById("app");
ReactDOM.render(
	<Provider store = { store }>
		<Notes/>
	</Provider>,
	rootElement
);