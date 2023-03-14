import { useEffect, useRef } from 'react';
import styles from './Cursor.module.css';

export const Cursor = ({ as: Component = 'div' }) => {
  return <Component id="cursor" className={styles.cursor}></Component>;
};
