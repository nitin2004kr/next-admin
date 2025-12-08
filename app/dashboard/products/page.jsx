import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/products/products.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for prodicts..."} />
        <button className={styles.addUser}>Add New</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.thead}>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
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
                <span className={styles.name}>Patato</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                vegetable
              </span>
            </td>
            <td>$0.5</td>
            <td>06-12-2025</td>
            <td>220</td>
            <td>
              <div className={styles.action}>
                <button className={`${styles.viewBtn} ${styles.btn}`}>View</button>
                <button className={`${styles.deleteBtn} ${styles.btn}`}>Delete</button>
              </div>
            </td>
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
                <span className={styles.name}>Bringle</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Seed Veg
              </span>
            </td>
            <td>$0.8</td>
            <td>06-12-2025</td>
            <td>400</td>
            <td>
              <div className={styles.action}>
                <button className={`${styles.viewBtn} ${styles.btn}`}>View</button>
                <button className={`${styles.deleteBtn} ${styles.btn}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
     
     <Pagination />
    </div>
  );
};

export default Products;
