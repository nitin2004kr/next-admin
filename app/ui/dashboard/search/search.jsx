import styles from "./search.module.css";
import { IoSearch } from "react-icons/io5";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <IoSearch style={{ color: "#fff" }} size={"14"} />
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default Search;
