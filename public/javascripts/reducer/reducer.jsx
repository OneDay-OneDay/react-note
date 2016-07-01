"use strict";
import { combineReducers } from "redux";
import { INIT_NOTES, ADD_NOTE, DELETE_NOTE } from "../action/action.jsx";

//处理笔记初始化、添加及删除请求
function notes(state = [ ], action){
	//每一次的操作无论是添加、删除还是初始化，全部的笔记内容会被重新更新一次
	switch(action.type){
		case INIT_NOTES:
			return [ ...action.notes ];
		case ADD_NOTE:
			return [ ...action.notes ];
		case DELETE_NOTE:
			return [ ...action.notes ];
		default:
			return state;
	}
}

const rootReducer = combineReducers({ notes });
export default rootReducer;