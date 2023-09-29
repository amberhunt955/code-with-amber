import { useEffect } from "react";

// import post data
import posts from "../../data/posts";

// import components
import Attribution from "../../components/Attribution";

// style and design
import styles from "./HomePage.module.css";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  return (
    <div className={styles.HomePage}>
      <header>
        {/* <img src={logo} width="120px" height="120px" /> */}
        <span>
          <h1>Hi there, I'm Amber! 👩🏻‍💻</h1>
          <p>
            Welcome to my professional blog.
          </p>
        </span>
      </header>
      <section className={styles.PostsSection}>
        {posts.map((post) => (
          <div className={styles.Post} key={post.id}>

            <Attribution img={post.img} alt={post.alt} group={"PostImage"} width={"250px"} height={"200px"} link={post.url}/>

            <div className={styles.PostContent}>
              <h2>{post.title}</h2>

              <span className={styles.PostText}>
                {post.truncatedContent + "..."}
              </span>

              <i>{post.date}</i>

              <a href={`post/${post.id}`}>Read More</a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
