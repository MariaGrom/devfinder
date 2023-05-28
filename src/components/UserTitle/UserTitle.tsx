import { LocalGithubUser } from "types";
import styles from "./UserTitle.module.scss";

interface UserTitleProps
  extends Pick<LocalGithubUser, "name" | "login" | "created"> {}

//  функция переформатирования даты
const LocalDate = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

export const UserTitle = ({ name, login, created }: UserTitleProps) => {
  const joinedDate = LocalDate.format(new Date(created));

  return (
  <div className={styles.userTitle}>
    <div>
    <h2>{name}</h2>
    <h3>{login}</h3>

    </div>
    <span>{joinedDate}</span>
  </div>);
};
