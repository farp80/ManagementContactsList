import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export default class EditContact extends React.Component {
	constructor() {
		super();
		this.state = {
			fullName: null,
			address: null,
			phone: null,
			email: null
		};
	}

	onChangeFullName = e => this.setState({ fullName: e.target.value });
	onChangeAddress = e => this.setState({ address: e.target.value });
	onChangeEmail = e => this.setState({ email: e.target.value });
	onChangePhone = e => this.setState({ phone: e.target.value });

	render() {
		return (
			<div className="container">
				<Context.Consumer>
					{({ store, actions }) => {
						let customerId = this.props.match.params.theid;
						let currentCustomer = store.contacts.find(x => x.id === customerId);
						return (
							<div>
								<h1 className="text-center mt-5">{"Edit contact"}</h1>
								<form>
									<div className="form-group">
										<label>{"Full Name"}</label>
										<input
											defaultValue={currentCustomer.full_name}
											type="text"
											className="form-control"
											placeholder="Full Name"
											onChange={this.onChangeFullName}
										/>
									</div>
									<div className="form-group">
										<label>{"Email"}</label>
										<input
											defaultValue={currentCustomer.email}
											type="email"
											className="form-control"
											placeholder="Enter email"
											onChange={this.onChangeEmail}
										/>
									</div>
									<div className="form-group">
										<label>{"Phone"}</label>
										<input
											defaultValue={currentCustomer.phone}
											type="phone"
											className="form-control"
											placeholder="Enter phone"
											onChange={this.onChangePhone}
										/>
									</div>
									<div className="form-group">
										<label>{"Address"}</label>
										<input
											defaultValue={currentCustomer.address}
											type="text"
											className="form-control"
											placeholder="Enter address"
											onChange={this.onChangeAddress}
										/>
									</div>
									<button
										type="button"
										className="btn btn-primary form-control"
										onClick={() =>
											actions.addContact(
												this.state.fullName === null
													? currentCustomer.full_name
													: this.state.fullName,
												this.state.address === null
													? currentCustomer.address
													: this.state.address,
												this.state.email === null ? currentCustomer.email : this.state.email,
												this.state.phone === null ? currentCustomer.phone : this.state.phone
											)
										}>
										{"Update"}
									</button>
									<Link className="mt-3 w-100 text-center" to="/">
										{"or get back to contacts"}
									</Link>
								</form>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

EditContact.propTypes = {
	match: PropTypes.object
};
