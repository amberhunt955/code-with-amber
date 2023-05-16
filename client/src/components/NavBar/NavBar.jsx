import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav className={styles.NavBar}>
      <span>Code with Amber</span>{" | "}
      <a href="/">Home</a>
    </nav>
  );
}

export default NavBar;
