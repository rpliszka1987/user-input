import Styles from "./Button.module.css";

function Button() {
  return (
    <button type="submit" className={Styles.button}>
      Add User
    </button>
  );
}

export default Button;
