"use strict";
import React, { Component, PropTypes } from "react";

class Notes_header extends React.Component{
	render(){
		return(
			<div className="header">
				<div className="header_main">
					<h2>React 笔记</h2>
					<input type="button" value="添加笔记" className="add_note_btn" onClick={ this.props.onToggleForm }/>
				</div>
			</div>
		);
	}
}

Notes_header.propTypes = {
	onToggleForm : PropTypes.func.isRequired
}

export default Notes_header;