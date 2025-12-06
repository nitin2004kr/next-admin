import styles from './footer.module.css'


const Footer = () => {
  return (
    <div className={styles.container}>
        <span className={styles.title}>Next.js  Admin Dashboard Project</span>
      <span className={styles.copy}>project@copywrite</span>
    </div>
  )
}

export default Footer
