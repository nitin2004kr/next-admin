import Search from "@/app/ui/dashboard/search/search";
import styles from "../../ui/dashboard/users/users.module.css";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/pagination";

const Users = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder={"search for user..."} />
        <button className={styles.addUser}>Add New</button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr className={styles.thead}>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
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
                <span className={styles.name}>Jonathon</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                jonathon@gmail.com
              </span>
            </td>
            <td>05-12-2025</td>
            <td>Admin</td>
            <td>Active</td>
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
                <span className={styles.name}>Harinthon</span>
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                harinthon@gmail.com
              </span>
            </td>
            <td>06-12-2025</td>
            <td>Manager</td>
            <td>Inactive</td>
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

export default Users;
