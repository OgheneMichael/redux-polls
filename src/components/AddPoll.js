import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddPoll } from "../actions/polls";

class AddPoll extends Component {
	state = {
		question: "",
		a: "",
		b: "",
		c: "",
		d: ""
	};

	handleInputChange = e => {
		const { value, name } = e.target;

		this.setState(() => ({
			[name]: value
		}));
	};

	isDisabled = () => {
		const { question, a, b, c, d } = this.state;

		return question === "" || a === "" || b === "" || c === "" || d === "";
	};

	handleSubmit = e => {
		e.preventDefault();
		// Redirect to /
		this.props.history.push("/");

		console.log("Add poll: ", this.state);
		this.props.dispatch(handleAddPoll(this.state));
	};

	render() {
		const { question, a, b, c, d } = this.state;
		return (
			<form className="add-form" onSubmit={this.handleSubmit}>
				<h3 style={{ marginBottom: 5 }}>What is your question?</h3>
				<input
					value={question}
					onChange={this.handleInputChange}
					type="text"
					name="question"
					className="input"
				/>

				<h3>What are the options?</h3>

				<label htmlFor="a" className="label">
					A.
				</label>
				<input
					value={a}
					onChange={this.handleInputChange}
					name="a"
					id="a"
					type="text"
					className="input"
				/>

				<label htmlFor="b" className="label">
					B.
				</label>
				<input
					value={b}
					onChange={this.handleInputChange}
					name="b"
					id="b"
					type="text"
					className="input"
				/>

				<label htmlFor="c" className="label">
					C.
				</label>
				<input
					value={c}
					onChange={this.handleInputChange}
					name="c"
					id="c"
					type="text"
					className="input"
				/>

				<label htmlFor="d" className="label">
					D.
				</label>
				<input
					value={d}
					onChange={this.handleInputChange}
					name="d"
					id="d"
					type="text"
					className="input"
				/>

				<button className="btn" type="submit" disabled={this.isDisabled()}>
					Submit
				</button>
			</form>
		);
	}
}

export default connect()(AddPoll);
