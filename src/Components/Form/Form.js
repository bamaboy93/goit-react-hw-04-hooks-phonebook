import { useState } from 'react';

import styles from './Form.module.css';
const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSubmit = e => {
    e.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  const inputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={formSubmit}>
      <label className={styles.name}>
        Name:
        <input
          className={styles.input}
          type="text"
          onChange={inputChange}
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.name}>
        Number:
        <input
          className={styles.input}
          type="tel"
          value={number}
          onChange={inputChange}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button className={styles.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
