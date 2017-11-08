"use strict";
import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { initNotes, addNote, deleteNote, DISPLAYED_NOTE } from "../action/action.jsx";
import Notes_header from "../component/Notes_header.jsx";
import Notes_form from "../component/Notes_form.jsx";
import Notes_list from "../component/Notes_list.jsx";
import "../../stylesheets/style.scss";

class Notes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			formDisplayed: false
		};
	}

	componentDidMount() {
		this.props.dispatch(initNotes());
	}

	render() {
		const { notes } = this.props;
		return (
			<div className="container">
				<Notes_header />
				<div className="container_main">
					<Notes_form />
					<Notes_list notes={notes} />
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		// formDisplayed: state.formDisplayed
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onToggleForm: () => dispatch({ type: DISPLAYED_NOTE }),
		onNewNote: newNote => dispatch(addNote(newNote)),
		onDeleteNote: date => dispatch(deleteNote(delete_date))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Notes);