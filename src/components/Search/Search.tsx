import { useRef } from "react";
import styles from "./Search.module.scss";
import { ReactComponent as SearchIcon } from "assets/icon-search.svg";
import { Button } from "components/Button";

interface SearchProps {
  hasError: boolean;
  onSubmit: (text: string) => void;
}

export const Search = ({ hasError, onSubmit }: SearchProps) => {
  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    console.log("searchRef", searchRef);
    // проверяем существует ли текущий реф. если существует - вызываем пропс onSubmit
    // и передаем ему текущее текстовое значение
    const text = searchRef.current ? searchRef.current.value : "";
    if (text) {
      onSubmit(text);
      // после вызова onSubmit очищаем форму, предварительно проверим, что такая
      // сущность существует
      if (searchRef.current) 
      searchRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}>
          <SearchIcon />
        </label>
        <input
          ref={searchRef}
          type="text"
          className={styles.textField}
          id="search"
          name="username"
          placeholder="Search GitHub username..."
        />
        {hasError && <div className={styles.error}>No result</div>}
        <Button>Search</Button>
      </div>
    </form>
  );
};
