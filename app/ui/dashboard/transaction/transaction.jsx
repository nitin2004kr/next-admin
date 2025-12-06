import React from "react";
import styles from "./transaction.module.css";
import Image from "next/image";

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Latest Transaction</h1>

      <table className={styles.table}>
        <thead>
          <tr className={styles.thead}>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>

        <tbody>
          <tr className={styles.tbody}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  className={styles.userImage}
                  width={30}
                  height={30}
                />
                <span className={styles.name}>Jonathon</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                pending
              </span>
            </td>
            <td>04-12-2025</td>
            <td>$250</td>
          </tr>

          <tr className={styles.tbody}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  className={styles.userImage}
                  width={30}
                  height={30}
                />
                <span className={styles.name}>Jonathon</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>04-12-2025</td>
            <td>$250</td>
          </tr>
          
          <tr className={styles.tbody}>
            <td>
              <div className={styles.user}>
                <Image
                  src="/noavatar.png"
                  alt="user"
                  className={styles.userImage}
                  width={30}
                  height={30}
                />
                <span className={styles.name}>Jonathon</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.failed}`}>
                failed
              </span>
            </td>
            <td>04-12-2025</td>
            <td>$250</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transaction;
