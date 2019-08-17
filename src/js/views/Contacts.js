import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "../component/ContactCard.js";
import Modal from "../component/Modal";
import { Context } from "../store/appContext";

export default class Contacts extends React.Component {
	constructor() {
		super();
		this.state = {
			showModal: false,
			tempId: ""
		};
	}

	render() {
		return (
			<div className="container">
				<div>
					<p className="text-right my-3">
						<Link className="btn btn-success" to="/add">
							Add new contact
						</Link>
					</p>
					<Context.Consumer>
						{({ store, actions }) => {
							return store.contacts.map((item, index) => {
								return (
									<div
										key={index}
										id="contacts"
										className="panel-collapse collapse show"
										aria-expanded="true">
										<ul className="list-group pull-down" id="contact-list" key={index}>
											<ContactCard
												key={index}
												onDelete={id => this.setState({ showModal: true, tempId: id })}
												contactsSettings={item}
											/>
										</ul>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
				<Modal
					id={this.state.tempId}
					show={this.state.showModal}
					onClose={() => this.setState({ showModal: false })}
				/>
			</div>
		);
	}
}
