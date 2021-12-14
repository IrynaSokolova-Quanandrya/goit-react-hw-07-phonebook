/** @format */
import React, { useState } from "react";
import { useGetFilteredContactsMutation } from "redux/slice";
import PropTypes from "prop-types";
import s from "styles/input.module.css";

export default function Filter() {
  const [value, setValue] = useState("");
  const { data, error } = useGetFilteredContactsMutation(value, {
    skip: value === "",
  });

  const handleChange = (e) => {
    console.log(e.target);
    // e.preventDefault();
    // setValue(e.target.value.toLowerCase());
    // e.target.value.reset();
    // refetch();
  };

  return (
    <>
      {error && !data && <p>Not found</p>}
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          value={value}
          onChange={() => handleChange(value)}
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
