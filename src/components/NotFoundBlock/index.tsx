import React from 'react';

import styles from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>😕</span>
        <br />
        404 Not Found
      </h1>
      <p className={styles.description}>К сожалению, данная страница отсутствует</p>
    </div>
  );
};

export default NotFoundBlock;
