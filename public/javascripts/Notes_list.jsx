"use strict";
import React from "react";
import Notes_item from "./Notes_item.jsx";

class Notes_list extends React.Component{
	render(){
		var notes=this.props.notes;
		var notes_items=notes.map( (note,index) => {
			return <Notes_item key={ index } title={ note.title } description={ note.description } 
				date={ note.date } onDeleteNote={ this.props.onDeleteNote }/>;
		});
		return(
			<div className="notes_list">
				{ notes_items }
			</div>
		);
	}
}

export default Notes_list;