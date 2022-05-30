import styles from "./style.module.css";

export const ItemMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerBackground}>
        <img src="/temp/" alt="Item 01" />
      </div>
      <div className={styles.itemCategory}>Tradicional</div>
      <div className={styles.itemTitle}>Texas Burguer</div>
      <div className={styles.price}>R$ 25,90</div>
    </div>
  );
};
