import posts from "../../data/posts";

import logo from "../../assets/logo.png";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.HomePage}>
      <header>
        <img src={logo} width="120px" height="120px" />
        <span>
          <h1>Code with Amber</h1>
          <p>
            Follow my journey as I continue to expand my skillset in software
            development.
          </p>
        </span>
      </header>
      <section className={styles.PostsSection}>
        {posts.map((post) => (
          <div className={styles.Post} key={post.id}>
            <img src={post.img} alt={post.alt} width="250px" height="200px" />

            <div className={styles.PostContent}>
              <h2>{post.title}</h2>

              <span className={styles.PostText}>{post.content}</span>

              <a href={`post/${post.id}`}>Read More</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
