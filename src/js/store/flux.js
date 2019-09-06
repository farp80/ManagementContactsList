const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://3000-c814bd77-10fa-4924-ad44-b41618a0b5f1.ws-us1.gitpod.io/contact")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => {
						console.log(error);
					});
			},
			addContact: (fullname, address, email, phone, history) => {
				let bodyToAdd = {
					full_name: fullname,
					email: email,
					agenda_slug: "nerroazurro14",
					address: address,
					phone: phone
				};
				fetch("https://3000-c814bd77-10fa-4924-ad44-b41618a0b5f1.ws-us1.gitpod.io/contact", {
					method: "POST",
					body: JSON.stringify(bodyToAdd),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(() => {
						fetch("https://3000-c814bd77-10fa-4924-ad44-b41618a0b5f1.ws-us1.gitpod.io/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }), history.push("/contacts"))
							.catch(error => {
								console.log(error);
							});
					})
					.catch(error => {
						console.log(error);
					});
			},
			onDeleteContact: contactId => {
				fetch("https://3000-c814bd77-10fa-4924-ad44-b41618a0b5f1.ws-us1.gitpod.io/contact/" + contactId, {
					method: "DELETE"
				})
					.then(data => {
						const store = getStore();
						let deletedContact = store.contacts.filter(value => value.id !== contactId);
						setStore({ contacts: deletedContact });
					})
					.catch(error => {
						console.log(error);
					});
			},
			editContact: (fullname, address, email, phone, id) => {
				let bodyToAdd = {
					full_name: fullname,
					email: email,
					agenda_slug: "nerroazurro14",
					address: address,
					phone: phone
				};
				fetch("https://3000-c814bd77-10fa-4924-ad44-b41618a0b5f1.ws-us1.gitpod.io/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(bodyToAdd),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(() => {
						fetch("https://3000-c814bd77-10fa-4924-ad44-b41618a0b5f1.ws-us1.gitpod.io/contact")
							.then(response => response.json())
							.then(data => setStore({ contacts: data }))
							.catch(error => {
								console.log(error);
							});
					})
					.catch(error => {
						console.log(error);
					});
			}
		}
	};
};

export default getState;
