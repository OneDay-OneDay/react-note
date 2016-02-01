"use strict";
import React from "react";
import ReactDOM from "react-dom";
import $ from "./jquery.min.js";
import Notes_header from "./Notes_header.jsx";
import Notes_form from "./Notes_form.jsx";
import Notes_list from "./Notes_list.jsx";

class Notes extends React.Component{
	constructor(props){
		super(props);
		this.state={
			notes : [],
			formDisplayed : false
		};
	}

	componentDidMount(){
		$.ajax({
			url : "/init",
			type : "get",
			dataType : "json",
			cache : false,
			success : function(notes){
				/*notes是从数据库读取到的笔记数组*/
				// console.log("请求成功了耶！！但是...数据呢？...");
				notes=this.notesSort(notes);
				this.setState({
					notes: notes
				});
				// console.log(this.state.notes);
			}.bind(this),
			error : function(){
				console.log("视图渲染失败...");
			}
		});
	}

	onToggleForm(){
		this.setState({
			formDisplayed : !this.state.formDisplayed
		});
	}

	onNewNote(newNote){
		// console.log(JSON.stringify(newNote));
		$.ajax({
			url : "/addNote",
			type : "post",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			data : JSON.stringify(newNote),/*反序列化，到了服务端再被bodypaser.json（）序列化，真够折腾啊*/
			cache : false,
			success : function(notes){
				console.log("笔记添加成功！");
				notes=this.notesSort(notes);
				this.setState({
					notes:notes
				});
			}.bind(this),
			error : function(){
				console.log("失败啦~什么原因呢...");
			}
		});
	}

	onDeleteNote(date){/*根据日期来删除笔记*/
		alert( "不管啦，我就要删除它！！=> "+ date );
		var delete_date={
			date : date
		};
		console.log(JSON.stringify(delete_date));
		$.ajax({
			url : "/deleteNote",
			type : "post",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			data : JSON.stringify(delete_date),
			cache : false,
			success : function(notes){
				console.log("笔记已经被删除啦！");
				notes=this.notesSort(notes);
				this.setState({
					notes: notes
				});
			}.bind(this),
			error : function(){
				console.log("失败啦~什么原因呢...");
			}

		});
	}

	notesSort(newNotes){
		newNotes.reverse();/*将数据库取到的notes倒序排列再显示，即后添加上去的记录在最前面显示*/
		return newNotes;
	}

	render(){
		return(
			<div className="container">
				<Notes_header onToggleForm={ this.onToggleForm.bind(this) }/>
				<div className="container_main">
					<Notes_form onToggleForm={ this.onToggleForm.bind(this) } 
					formDisplayed={ this.state.formDisplayed } onNewNote={ this.onNewNote.bind(this) }/>
					<Notes_list notes={ this.state.notes } onDeleteNote={ this.onDeleteNote.bind(this) }/>
				</div>
			</div>
		);
	}
}

ReactDOM.render(<Notes/>,document.getElementById("app"));