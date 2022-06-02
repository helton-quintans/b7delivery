import styles from "./style.module.css";

type ItemMenuProps = {
  category: string;
  title: string;
  price: string;
};

export const ProductItem = (props: ItemMenuProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerBackground}>
        <img src="/temp/GoldenBurger1.png" alt="Item 01" />
      </div>
      <div className={styles.itemCategory}>{props.category}</div>
      <div className={styles.itemTitle}>{props.title}</div>
      <div className={styles.price}>R$ {props.price}</div>
    </div>
  );
};
