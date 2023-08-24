import ReactDOM from "react-dom";
import styles from "./ErrorModal.module.css";
import Card from "../Card/Card";
import Button from "../Button/Button";

// This is the modal Backdrop component
function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
}

// This is the modal component
function ModalOverlay(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {/* Using portal displays the modal backdrop */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {/* Using portal displays the modal */}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
