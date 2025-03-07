import style from "./ContactList.module.css";
import Contact from "../contact/Contact";

const ContactList = ({ contactsData, onDelete }) => {
  return (
    <>
      <ul>
        {contactsData.map((el) => (
          <li className={style.taskWrapper} key={el.id}>
            <Contact contactData={el} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
