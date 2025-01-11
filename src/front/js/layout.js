import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import injectContext from "./store/appContext";
// Customs Components 
import ScrollToTop from "./component/ScrollToTop.jsx";
import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
// Custom Pages
import { ContactList } from "./pages/ContactList.jsx";
import { AddContact } from "./pages/AddContact.jsx";
import { Home } from "./pages/Home.jsx";
import { EditContact } from "./pages/EditContact.jsx";


const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<ContactList />} path="/contact-list" />
                        <Route element={<AddContact />} path="/add-contact" />
                        <Route element={<h1>Not Found</h1>} path="*" />
                        <Route element={<EditContact />} path="/edit-contact/:id" />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
