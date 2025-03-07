import style from "./Contact.module.css";

const Contact = ({ contactData, onDelete }) => {
  return (
    <>
      <div>
        <p>{contactData.name}</p>
        <p>{contactData.number}</p>
      </div>

      <button onClick={() => onDelete(contactData.id)}>Delete</button>
    </>
  );
};

export default Contact;
