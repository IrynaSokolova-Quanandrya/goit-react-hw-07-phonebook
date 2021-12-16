import { useDeleteContactMutation } from "redux/slice";
import PropTypes from "prop-types";
import styles from "styles/button.module.css";
import s from "styles/contactList.module.css";

export default function ContactListItem({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={s.contact__item} key={id}>
      {name}: {phone}
      <button
        type="button"
        className={styles.btn}
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </li>
  );
}

ContactListItem.prototype = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.number.isRequired,
};
