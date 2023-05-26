import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import styles from "./NavBar.module.css";

function NavBar({ admin, setAdmin }) {
  const handleClick = () => {
    setAdmin(false);
  };

  return (
    <nav className={styles.NavBar}>
      <div className={styles.MainOptions}>
        <a href="/">{<HomeIcon />}</a>
      </div>

      <div className={styles.left}>
        <a href="/about">About</a>

        {" | "}

        <a href="/contact">Contact</a>

        {admin ? (
        <div className={styles.adminOptions}>
          {" | "}

          <a href="/write-post">New Post</a>

          {" | "}

          <Button variant="contained" onClick={handleClick}>Log Out</Button>
        </div>
      ) : (
        ""
      )}
      </div>
    </nav>
  );
}

export default NavBar;
