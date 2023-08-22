import styles from "./UserList.module.css";
import Card from "../Card/Card";

function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          <li>
            {user.name} ({user.age}) years old.
          </li>;
        })}
      </ul>
    </Card>
  );
}

export default UserList;
