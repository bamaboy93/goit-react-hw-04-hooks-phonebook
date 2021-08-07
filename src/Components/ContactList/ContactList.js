import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

import styles from './ContactList.module.css';

const ContactsList = ({ contacts, onDeleteClick }) => (
  <ul className={styles.contactsList}>
    <Contact contacts={contacts} onDeleteClick={onDeleteClick} />
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

export default ContactsList;
