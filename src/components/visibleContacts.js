export default function getVisibleContacts(contacts = [], filter) {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });
}
