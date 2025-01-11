import React from "react";
import PropTypes from "prop-types";

const CardContact = ({ contact, onDelete, onEdit }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <h5>{contact.name}</h5>
                <p>
                    <strong>Email:</strong> {contact.email} <br />
                    <strong>Phone:</strong> {contact.phone}
                </p>
            </div>
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

CardContact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired
};

export default CardContact;
