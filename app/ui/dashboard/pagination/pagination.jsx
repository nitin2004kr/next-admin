import styles from "./pagination.module.css";
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const Pagination = () => {
  return (
    <div className={styles.container}>
      <button className={`${styles.prev} ${styles.btn}`}>
        <FaAnglesLeft /> Prev
      </button>
      <button className={`${styles.next} ${styles.btn}`}>
        Next <FaAnglesRight />
      </button>
    </div>
  );
};

export default Pagination;
