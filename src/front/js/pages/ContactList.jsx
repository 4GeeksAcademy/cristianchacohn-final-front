import React, { useContext } from "react";
import { Context } from "../store/appContext";
import CardContact from "../component/CardContact.jsx";
import { useNavigate } from "react-router-dom";


export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    console.log(store);

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Contacts</h1>
            <div className="text-end mb-3">
                <button
                    className="btn btn-primary"
                    onClick={() => navigate("/add-contact")}>
                    Add New Contact
                </button>
            </div>
            <ul className="list-group">
                {store.contacts && store.contacts.length > 0 ? (
                    store.contacts.map((contact) => (
                        <CardContact
                            key={contact.id}
                            contact={contact}
                            onDelete={actions.deleteContact}
                            onEdit={() => navigate(`/edit-contact`)}
                        />
                    ))
                ) : (
                    <li className="list-group-item">No contacts available.</li>
                )}
            </ul>
        </div>
    );
};

