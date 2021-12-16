/** @format */
import PropTypes from "prop-types";
import s from "styles/input.module.css";

export default function Filter({ value, onFilterChange }) {
  return (
    <>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          value={value}
          name={value}
          onChange={onFilterChange}
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
}
Filter.prototype = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
