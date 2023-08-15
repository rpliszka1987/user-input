import styles from "./AddUser.module.css";
import Button from "../Button/Button";

function AddUser() {
  return (
    // User info form
    <form className={styles.input}>
      <label>Username</label>
      <input id="username" type="string"></input>
      <label>Age (Years)</label>
      <input id="user-age" type="number"></input>
      <Button />
    </form>
  );
}

export default AddUser;
