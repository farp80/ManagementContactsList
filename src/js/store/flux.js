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
			}
		}
	};
};

export default getState;
