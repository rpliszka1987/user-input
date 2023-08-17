import styles from "./AddUser.module.css";

function AddUser() {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    // User info form
    <form className={styles.input} onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text"></input>
      <label htmlFor="user-age">Age (Years)</label>
      <input id="user-age" type="number"></input>
      <button type="submit" className={styles.button}>
        Add User
      </button>
    </form>
  );
}

export default AddUser;
