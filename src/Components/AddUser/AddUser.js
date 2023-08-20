import styles from "./AddUser.module.css";
import Card from "../Card/Card";

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
        <button type="submit" className={styles.button}>
          Add User
        </button>
      </form>
    </Card>
  );
}

export default AddUser;
