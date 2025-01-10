const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            listContacts: [],
        },
        actions: {
            loadContacts: async () => {
                const response = await fetch();
                const data = await response.json();
                setStore({ listContacts: data });
            },
            addContact: (contact) => {
                const store = getStore();
                const newContact = { id: Date.now(), ...contact };
                setStore({ listContacts: [...store.listContacts, newContact] });
            },
            deleteContact: (id) => {
                const store = getStore();
                const updatedContacts = store.listContacts.filter((contact) => contact.id !== id);
                setStore({ listContacts: updatedContacts });
            },
            editContact: (updatedContact) => {
                const store = getStore();
                const updatedContacts = store.listContacts.map((contact) =>
                    contact.id === updatedContact.id ? updatedContact : contact
                );
                setStore({ listContacts: updatedContacts });
            },
        },
    };
};

export default getState;
