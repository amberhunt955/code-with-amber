import styles from "./LoginPage.module.css"

function LoginPage() {
  return (
    <div className={styles.LoginPage}>
      <form>
        <h1>Admin Log In</h1>
        <label>Username: <input placeholder="Username"/></label>
        <label>Password: <input placeholder="Password"/></label>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
