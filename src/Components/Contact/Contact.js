import React from 'react';

import styles from './Contact.module.css';

const Contact = ({ contacts, onDeleteClick }) =>
  contacts.map(({ id, name, number }) => {
    return (
      <li className={styles.contactsItem} key={id}>
        {name}: {number}
        <button
          className={styles.contactsBtn}
          onClick={() => onDeleteClick(id)}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });

export default Contact;
