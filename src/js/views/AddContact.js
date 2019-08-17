import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export default class AddContact extends React.Component {
	constructor() {
		super();
		this.state = {
			fullName: "",
			address: "",
			phone: "",
			email: ""
		};
	}

	onChangeFullName = e => this.setState({ fullName: e.target.value });
	onChangeAddress = e => this.setState({ address: e.target.value });
	onChangeEmail = e => this.setState({ email: e.target.value });
	onChangePhone = e => this.setState({ phone: e.target.value });

	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form>
						<div className="form-group">
							<label>Full Name</label>
							<input
								type="text"
								className="form-control"
								placeholder="Full Name"
								onChange={this.onChangeFullName}
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control"
								placeholder="Enter email"
								onChange={this.onChangeEmail}
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								type="phone"
								className="form-control"
								placeholder="Enter phone"
								onChange={this.onChangePhone}
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								type="text"
								className="form-control"
								placeholder="Enter address"
								onChange={this.onChangeAddress}
							/>
						</div>
						<Context.Consumer>
							{({ actions }) => {
								return (
									<button
										type="button"
										className="btn btn-primary form-control"
										onClick={() =>
											actions.addContact(
												this.state.fullName,
												this.state.address,
												this.state.email,
												this.state.phone
											)
										}>
										{"save"}
									</button>
								);
							}}
						</Context.Consumer>
						<Link className="mt-3 w-100 text-center" to="/">
							or get back to contacts
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
