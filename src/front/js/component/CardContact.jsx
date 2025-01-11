import React from "react";
import PropTypes from "prop-types";

const CardContact = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="list-group-item d-flex align-items-center">
            {/* Imagen del contacto */}
            <div className="me-3">
                <img
                    src={contact.image || "https://static.vecteezy.com/system/resources/thumbnails/003/428/270/small/businessman-explain-pose-character-design-free-vector.jpg"} // Imagen del contacto o un placeholder
                    alt={contact.name}
                    className="rounded-circle"
                    style={{ width: "50px", height: "50px", objectFit: "cover" }}
                />
            </div>

            {/* Información del contacto */}
            <div className="flex-grow-1">
                <h5>{contact.name}</h5>
                <p className="mb-1">{contact.email}</p>
                <p className="mb-0">{contact.phone}</p>
            </div>

            {/* Acciones */}
            <div>
                <button className="btn btn-warning me-2" onClick={onEdit}>
                    Edit
                </button>
                <button className="btn btn-danger" onClick={() => onDelete(contact.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};
export default CardContact;
