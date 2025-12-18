import styles from "../../../ui/dashboard/users/add/addUser.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
        />

        <input
          type="email"
          placeholder="email"
          name="email"
        />

        <input
          type="password"
          placeholder="password"
          name="password"
        />

        <input
          type="text"
          placeholder="phone"
          name="phone"
        />

        <select className={styles.seleect} name="isadmin">
          <option value={false}>is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <select className={styles.seleect} name="status">
          <option value={true}>Status</option>
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>

        <textarea
          placeholder="address"
          className={styles.address}
          name="address"
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddUser;
