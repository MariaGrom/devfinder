import { useEffect, useState } from "react";
import { ReactComponent as MoonIcon } from "assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "assets/icon-sun.svg";
import styles from "./ThemeSwitcher.module.scss";

export const ThemeSwitcher = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const themeText = darkTheme ? "Light" : "Dark";
  const ThemeIcon = darkTheme ? SunIcon : MoonIcon;

  // эффект следящий за изменением темы и устанавливающий соответвующий атрибут
  // body  в зависимости от состояния перемнной darkTheme
  useEffect(() => {
    document.body.setAttribute("data-theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  return (
    <div className={styles.switcher} onClick={() => setDarkTheme(!darkTheme)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
