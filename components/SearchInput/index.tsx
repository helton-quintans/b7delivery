import { useState } from "react";
import styles from "./style.module.css";
import SearchIcon from "./searchIcon.svg";
import { useAppContext } from "../../contexts/appContext";

type SearchInputProps = {
  onSearch: (searchValue: string) => void;
};

export const SearchInput = ({ onSearch }: SearchInputProps) => {
  const { tenant } = useAppContext();
  const [focused, setFocused] = useState(false);
  const [searchValue, SetSearchValue] = useState("");

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      onSearch(searchValue);
    }
  };

  return (
    <div
      className={styles.container}
      style={{ borderColor: focused ? tenant?.mainColor : "#fff" }}
    >
      <div className={styles.button} onClick={() => onSearch(searchValue)}>
        <SearchIcon color={tenant?.mainColor} />
      </div>
      <input
        type="text"
        className={styles.input}
        placeholder="Digite o nome do produto"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyUp={handleKeyUp}
        value={searchValue}
        onChange={(e) => SetSearchValue(e.target.value)}
      />
    </div>
  );
};
