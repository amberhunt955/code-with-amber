import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import styles from "./NavBar.module.css";
import logo from "../../assets/circle-logo.png"

function NavBar({ admin, setAdmin }) {
  const handleClick = () => {
    setAdmin(false);
  };

  return (
    <nav className={styles.NavBar}>
      <div className={styles.MainOptions}>
        <a href="/"><img src={logo} alt="code with amber logo, which is a circle with the letters c w a inside" width="40px" height="40px" />Code with Amber</a>
      </div>

      <div className={styles.left}>
        <a href="/about">About</a>

        <span>|</span>

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
