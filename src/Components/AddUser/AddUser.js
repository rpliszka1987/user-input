import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form className={styles.input} onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text"></input>
        <label htmlFor="user-age">Age (Years)</label>
        <input id="user-age" type="number"></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
