import React, { useState } from "react";
import styles from "./AddUser.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

function AddUser() {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isValid, setIsValid] = useState(true);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredUsername && enteredAge) {
      console.log(enteredUsername, enteredAge);
    } else {
      console.log('Not Valid')
    }

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredUsername(event.target.value);
  };

  const ageHandler = (event) => {
    if (event.target.value > 0 && event.target.value.trim().lrngth > 0) {
      setIsValid(true);
    }

    setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form className={styles.input} onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameHandler}
          value={enteredUsername}
        ></input>
        <label htmlFor="user-age">Age (Years)</label>
        <input
          id="user-age"
          type="number"
          onChange={ageHandler}
          value={enteredAge}
        ></input>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
