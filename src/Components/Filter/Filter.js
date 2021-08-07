import React from 'react';
import PropTypes from 'prop-types';

import styles from '../Form/Form.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder="Filter"
      onChange={onChange}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
