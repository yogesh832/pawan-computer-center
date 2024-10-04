import React from 'react';
import styles from './Row.module.css';

const Row = ({ number, type, image, description, link }) => {
  return (
    <tr className={styles.row}>
      <td>{number}</td>
      <td>{type}</td>
      <td><img src={image} alt={description} className={styles.image} /></td>
      <td>{description}</td>
      <td><a href={link} className={styles.downloadLink}>Download</a></td>
    </tr>
  );
};

export default Row;
