import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardContact from "../component/CardContact.jsx";

const ContactList = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Contacts</h1>
            <div className="text-end mb-3">
                <a href="/addContact" className="btn btn-primary">
                    Add New Contact
                </a>
            </div>
            <ul className="list-group">
                {store.listContacts && store.listContacts.length > 0 ? (
                    store.listContacts.map((contact) => (
                        <CardContact
                            key={contact.id}
                            contact={contact}
                            onDelete={actions.deleteContact}
                            onEdit={(contact) => actions.editContact(contact)}
                        />
                    ))
                ) : (
                    <li className="list-group-item">No contacts available.</li>
                )}
            </ul>
        </div>
    );
};

export default ContactList;
