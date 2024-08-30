import { Link, useNavigate } from "react-router-dom";
import styles from "./error.module.css";
const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div>
      <div id="background"></div>
      <div className={styles.top}>
        <h1 className={styles.h1}>404</h1>
        <h3 className={styles.h3}>page not found</h3>
      </div>
      <div className={styles.container}>
        <div className={styles.ghost_copy}>
          <div className={styles.one}></div>{" "}
          {/* Use styles for each ghost part */}
          <div className={styles.two}></div>
          <div className={styles.three}></div>
          <div className={styles.four}></div>
        </div>
        <div className={styles.ghost}>
          <div className={styles.face}>
            <div className={styles.eye}></div>
            <div className={styles.eye_right}></div>{" "}
            {/* Adjust camelCase for class names */}
            <div className={styles.mouth}></div>
          </div>
        </div>
        <div className={styles.shadow}></div>
      </div>
      <div className={styles.bottom}>
        <p className={styles.p}>Boo, looks like a ghost stole this page!</p>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={()=> navigate(-1)}>Back</button>
          <Link to={'/'} className={styles.btn}>Home</Link>
        </div>
      </div>

      <footer className={styles.footer}>
        <p className={styles.p}>
          made by <a href="https://codepen.io/juliepark"> julie</a> ♡
        </p>
      </footer>
    </div>
  );
};

export default ErrorPage;
