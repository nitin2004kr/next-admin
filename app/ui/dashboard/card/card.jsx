import React from 'react';
import styles from './card.module.css';
import { FaEarthAsia } from "react-icons/fa6";

const Card = () => {
  return (
    <div className={styles.container}>
        <FaEarthAsia size={'14'}/>
        
        <div className={styles.text}>
             <span className={styles.title}>Total Users</span>
             <span className={styles.number}>10.342</span>
              <span className={styles.details}>
                    <span className={styles.positive}>12%</span> more than previous week
              </span>
        </div>
    </div>
  )
}

export default Card
