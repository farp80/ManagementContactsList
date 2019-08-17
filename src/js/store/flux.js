const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/nerroazurro14")
					.then(response => response.json())
					.then(data => setStore({ contacts: data }))
					.catch(error => {
						console.log(error);
					});
			},
			addContact: (fullname, address, email, phone) => {
				let bodyToAdd = {
					full_name: fullname,
					email: email,
					agenda_slug: "nerroazurro14",
					address: address,
					phone: phone
				};
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(bodyToAdd),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						return response.json();
					})
					.then(data => {
						const store = getStore();
						delete bodyToAdd.agenda_slug;
						setStore({ contacts: store.contacts.concat(bodyToAdd) });
					})
					.catch(error => {
						console.log(error);
					});
			},
			onDeleteContact: contactId => {
				console.log(contactId);
				fetch("https://assets.breatheco.de/apis/fake/contact/" + contactId, {
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
			}
		}
	};
};

export default getState;
