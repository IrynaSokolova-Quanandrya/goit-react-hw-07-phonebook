/** @format */
import React from "react";
import { useGetContactsQuery } from "redux/slice";
import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem";
import s from "styles/contactList.module.css";

export default function ContactList() {
  const { data, isLoading } = useGetContactsQuery();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {data && (
        <ul className={s.contact__list}>
          {data.map((contact) => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
    </>
  );
}
ContactList.prototype = {
  contacts: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
