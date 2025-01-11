const getState = ({ getStore, getActions, setStore }) => {
    const apiBaseURL = "https://playground.4geeks.com/contact/";
    const agendaSlug = "cristianchacohnAgen"; 

    return {
        store: {
            contacts: [],
        },
        actions: {
            loadContacts: async () => {
                try {
                    const response = await fetch(`${apiBaseURL}agendas/${agendaSlug}/contacts`);
                    if (!response.ok) throw new Error("Failed to fetch contacts.");
                    const data = await response.json(); 
                    console.log(data, "DATA");
                    setStore({ contacts: data.contacts });
                } catch (error) {
                    console.error("Error loading contacts:", error);
                }
            },
            createContact: async (contact) => {
                try {
                    const response = await fetch(`${apiBaseURL}agendas/${agendaSlug}/contacts`,{
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ ...contact, agenda_slug: agendaSlug }),
                    });
                    if (!response.ok) throw new Error("Failed to create contact.");
                    await getActions().loadContacts();
                    return true;
                } catch (error) {
                    console.error("Error creating contact:", error);
                    return false;
                }
            },
            deleteContact: async (id) => {
                try {
                    const response = await fetch(`${apiBaseURL}agendas/${agendaSlug}/contacts/${id}`,{
                        method: "DELETE",
                    });
                    if (!response.ok) throw new Error("Failed to delete contact.");
                    await getActions().loadContacts();
                    return true;
                } catch (error) {
                    console.error("Error deleting contact:", error);
                    return false;
                }
            },
            updateContact: async (id, updatedContact) => {
                try {
                    const response = await fetch(`${apiBaseURL}agendas/${agendaSlug}/contacts/${id}`, {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(updatedContact), // Sin agenda_slug
                    });
                    if (!response.ok) throw new Error(`Error updating contact: ${response.statusText}`);
                    await getActions().loadContacts();
                    return true;
                } catch (error) {
                    console.error("Error updating contact:", error);
                    return false;
                }
            },
            
            
        },
    };
};

export default getState;