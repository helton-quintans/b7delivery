import { Banner } from "../../components/Banner";
import { ItemMenu } from "../../components/ItemMenu";
import { SearchInput } from "../../components/SearchInput";
import styles from "../../styles/Home.module.css";

const Home = () => {
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
                O que deseja para hoje
              </div>
            </div>
            <div className={styles.headerTopRigth}>
              <div className={styles.menuButton}>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
                <div className={styles.menuButtonLine}></div>
              </div>
            </div>
          </div>

          <div className={styles.headerBottom}>
            <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
          </div>
        </header>

        <Banner />

        <section className={styles.menuBody}>
          <ItemMenu category="Tradicional" title="Texas burguer" price={25} />
          <ItemMenu category="Tradicional" title="Texas burguer" price={25} />
          <ItemMenu category="Tradicional" title="Texas burguer" price={25} />
          <ItemMenu category="Tradicional" title="Texas burguer" price={25} />
          <ItemMenu category="Tradicional" title="Texas burguer" price={25} />
          <ItemMenu category="Tradicional" title="Texas burguer" price={25} />
        </section>
      </div>
      {/* <div className={styles.swiperContainer}>
        <SwiperHome />
      </div> */}
    </>
  );
};

export default Home;
