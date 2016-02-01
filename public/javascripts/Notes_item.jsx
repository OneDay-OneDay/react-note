"use strict";
import React from "react";

class Notes_item extends React.Component{

	handleOver(){
		this.refs.delete.style.display="block";
	}

	handleOut(){
		this.refs.delete.style.display="none";
	}

	handleDelete(){
		var date=this.props.date;
		this.props.onDeleteNote(date);
	}

	render(){
		return(
			<div>
				<div className="notes_item" onMouseOver={ this.handleOver.bind(this) } onMouseOut={ this.handleOut.bind(this) }>
					<h4>{ this.props.title }</h4>
					<p>{ this.props.description }</p>
					<input className="delete" ref="delete" type="button" value="删除它" onClick={ this.handleDelete.bind(this) }/>
					<span className="date">{ this.props.date }</span>
				</div>
			</div>
		);
	}
}

export default Notes_item;