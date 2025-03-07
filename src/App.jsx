import { useState, useEffect, useId } from "react";
import style from "./App.module.css";

import { MdAccountCircle } from "react-icons/md";
import { GoPencil } from "react-icons/go";
import { BiSolidPencil } from "react-icons/bi";

import ContactList from "./components/contactlist/ContactList";
import SearchBox from "./components/searchbox/SearchBox";
import ContactForm from "./components/contactform/ContactForm";

const contactsArr = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactsDataFromLS = JSON.parse(localStorage.getItem("contactsList"));

    if (contactsDataFromLS !== null) {
      return contactsDataFromLS;
    }

    return contactsArr;
  });

  const [searchBoxValue, setSearchBoxValue] = useState("");

  const visibleContacts = contacts.filter((el) =>
    el.name.toLowerCase().includes(searchBoxValue.toLowerCase())
  );

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((el) => el.id !== contactId)
    );
  };

  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div className={style.pageHeader}>
        <div className={style.iconWrapper}>
          <MdAccountCircle className={style.icon} />
        </div>
        <h1 className={style.pageTitle}>Contacts</h1>
        {/* <div className={`${style.iconWrapper} ${style.iconWrapperEdit}`}>
          <BiSolidPencil className={style.iconPencil} />
        </div> */}
      </div>
      <SearchBox
        searchBoxValue={searchBoxValue}
        setSearchBoxValue={setSearchBoxValue}
      />
      <ContactForm onAdd={addContact} />
      <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
    </>
  );
}

export default App;
