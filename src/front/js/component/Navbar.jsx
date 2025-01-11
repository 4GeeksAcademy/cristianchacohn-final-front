import React from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-light bg-light">
            <button
                    className="btn btn-primary"
                    onClick={() => navigate("/contact-list")}
                >
                    Contact List
            </button>
        </nav>
    );
};
