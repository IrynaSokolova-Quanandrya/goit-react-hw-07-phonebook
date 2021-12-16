/** @format */
import React from "react";
import { useGetContactsQuery } from "redux/slice";
import PropTypes from "prop-types";
import ContactListItem from "components/ContactListItem";
import s from "styles/contactList.module.css";
import getVisibleContacts from "components/visibleContacts";

export default function ContactList({ filter }) {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const visibleContacts = getVisibleContacts(contacts, filter);
  const showContacts = !isFetching && visibleContacts.length > 0;
  const showIfListEmpty =
    visibleContacts.length === 0 && !isFetching && !filter;
  const showIfNoResults = visibleContacts.length === 0 && !isFetching && filter;

  return (
    <>
      {isFetching && <p>Loading...</p>}
      {showContacts && (
        <ul className={s.contact__list}>
          {visibleContacts.map((contact) => (
            <ContactListItem key={contact.id} {...contact} />
          ))}
        </ul>
      )}
      {showIfListEmpty && <h2>Contact list empty</h2>}
      {showIfNoResults && <h2>No results</h2>}
    </>
  );
}
ContactList.prototype = {
  filter: PropTypes.string.isRequired,
};
