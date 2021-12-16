/** @format */
import { useState } from "react";
import s from "App.module.css";
import ContactForm from "components/ContactForm";
import ContactList from "components/ContactList";
import Filter from "components/Filter";

function Phonebook() {
  const [value, setValue] = useState("");
  const handleChange = (e) => setValue(e.target.value);
  return (
    <div>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <Filter filter={value} onFilterChange={handleChange} />
      <ContactList filter={value} />
    </div>
  );
}

export default Phonebook;
