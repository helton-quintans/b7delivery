import { GetServerSideProps } from "next";
import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import { useApi } from "../../libs/useApi";
import { Tenant } from "../../types/Tenant";
import { useAppContext } from "../../contexts/appContext";

import styles from "../../styles/Home.module.css";
import { useEffect } from "react";

const Home = (data: Props) => {
  const { tenant, setTenant} = useAppContext();
  // stando o tenant no contexto
  useEffect(()=>{
    setTenant(data.tenant);
  }, [])

  const handleSearch = (searchValue: string) => {
    console.log(`Você está buscando por ${searchValue}`);
  };
  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerTop}>
            <div className={styles.headerTopLeft}>
              <div className={styles.headerTitle}>Seja Bem Vindo(a)👋</div>
              <div className={styles.headerSubtitle}>
                O que deseja para hoje?
              </div>
            </div>
            <div className={styles.headerTopRigth}>
              <div className={styles.menuButton}>
                <div
                  className={styles.menuButtonLine}
                  style={{ backgroundColor: tenant?.mainColor }}
                ></div>
                <div
                  className={styles.menuButtonLine}
                  style={{ backgroundColor: tenant?.mainColor }}
                ></div>
                <div
                  className={styles.menuButtonLine}
                  style={{ backgroundColor: tenant?.mainColor }}
                ></div>
              </div>
            </div>
          </div>

          <div className={styles.headerBottom}>
            <SearchInput onSearch={handleSearch}/>
          </div>
        </header>

        <Banner />

        <div className={styles.grid}>
          <ProductItem
            data={{
              id: 1,
              image: "/temp/TexasBurger1.png",
              category: "Tradicional",
              name: "Texas Burger",
              price: "R$ 25,50",
            }}
          />
          <ProductItem
            data={{
              id: 1,
              image: "/temp/TexasBurger1.png",
              category: "Tradicional",
              name: "Texas Burger",
              price: "R$ 25,50",
            }}
          />
          <ProductItem
            data={{
              id: 1,
              image: "/temp/TexasBurger1.png",
              category: "Tradicional",
              name: "Texas Burger",
              price: "R$ 25,50",
            }}
          />
          <ProductItem
            data={{
              id: 1,
              image: "/temp/TexasBurger1.png",
              category: "Tradicional",
              name: "Texas Burger",
              price: "R$ 25,50",
            }}
          />
          <ProductItem
            data={{
              id: 1,
              image: "/temp/TexasBurger1.png",
              category: "Tradicional",
              name: "Texas Burger",
              price: "R$ 25,50",
            }}
          />
          <ProductItem
            data={{
              id: 1,
              image: "/temp/TexasBurger1.png",
              category: "Tradicional",
              name: "Texas Burger",
              price: "R$ 25,50",
            }}
          />
          
        </div>
      </div>
    </>
  );
};

export default Home;

type Props = {
  tenant: Tenant;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { tenant: tenantSlug } = context.query;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const api = useApi();

  //Get Tenant
  const tenant = await api.getTenant(tenantSlug as string);
  if (!tenant) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      tenant,
    },
  };
};
