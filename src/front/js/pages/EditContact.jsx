import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams(); // Obtiene el ID del contacto desde la URL
    const navigate = useNavigate();

    const [updatedContact, setUpdatedContact] = useState(null);

    useEffect(() => {
        const contact = store.contacts.find((contact) => contact.id === parseInt(id));
        if (contact) {
            setUpdatedContact(contact);
        } else {
            navigate("/contacts");
        }
    }, [id, store.contacts, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact({ ...updatedContact, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await actions.updateContact(id, updatedContact);
        if (success) navigate("/contact-list");
        else alert("Failed to update contact.");
    };

    if (!updatedContact) return <p>Loading...</p>;

    return (
        <div className="container mt-5">
            <h1 className="text-center my-4">Edit Contact</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={updatedContact.name || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={updatedContact.email || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={updatedContact.phone || ""}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Save Changes
                </button>
            </form>
        </div>
    );
};
