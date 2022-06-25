import Link from "next/link";
import { useAppContext } from "../../contexts/appContext";
import { Product } from "../../types/Product";

import styles from "./style.module.css";

type ProdctItemProps = {
  data: Product;
};

export const ProductItem = ({ data }: ProdctItemProps) => {
  const { tenant } = useAppContext()
  return (
    <Link href={`/${tenant?.slug}/product/${data.id}`}>
      <a className={styles.container}>
        <div className={styles.head} style={{ background: tenant?.secondColor }}></div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} alt="Burger" />
          </div>
          <div className={styles.catName}>{data.category}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: tenant?.mainColor }}>
            {data.price}
          </div>
        </div>
      </a>
    </Link>
  );
};
