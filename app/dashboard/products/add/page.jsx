import styles from "../../../ui/dashboard/products/add/addProduct.module.css";

const AddProduct = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="title" className={styles.text} name="title"/>
        <select className={styles.seleect} name="title">
          <option value={"general"}>Choose a Category</option>
          <option value={"red"}>Red</option>
          <option value={"yellow"}>Yellow</option>
          <option value={"green"}>Green</option>
        </select>
        <input type="text" placeholder="price" className={styles.text} name="price"/>
        <input type="text" placeholder="stock" className={styles.text} name="stock"/>
        <input type="text" placeholder="color" className={styles.text} name="color"/>
        <input type="text" placeholder="size" className={styles.text} name="size"/>
        <textarea placeholder="desc" className={styles.description} name="desc"></textarea>
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
