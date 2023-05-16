import styles from "./NavBar.module.css";

function NavBar({ admin, setAdmin }) {
  const handleClick = () => {
    setAdmin(false);
  }

  return (
    <nav className={styles.NavBar}>
      <div className={styles.MainOptions}>
        <span>Code with Amber</span>

        {" | "}

        <a href="/">Home</a>
      </div>
      
      {admin ? (
        <div className={styles.adminOptions}>
          <a href="/write-post">New Post</a>

          {" | "}

          <button onClick={handleClick}>Log Out</button>
        </div>
      ) 
      : 
        ("")
      }
    </nav>
  );
}

export default NavBar;
