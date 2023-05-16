import styles from "./HomePage.module.css";

// placeholder data
const posts = [
  {
    id: 1,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla...",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla...",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla...",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla ipsum dolor sit amet consectetur adipisicing elit. Repellat at natus maiores distinctio, pariatur iste itaque sunt praesentium sequi! Numquam ab fugiat suscipit voluptatem molestiae voluptatibus non culpa eos nihil vel minus aspernatur ipsum placeat perferendis repellendus, deserunt voluptatum deleniti animi debitis odit autem quas. Eveniet omnis nihil assumenda nulla...",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  },
];

function HomePage() {
  return (
    <div className={styles.HomePage}>
        <section className={styles.PostsSection}>
            
            {posts.map(post => (
                <div className={styles.Post} key={post.id}>
                    <img src={post.img} width="250px" height="200px"/>
                    
                    <div className={styles.PostContent}>
                      <h2>{post.title}</h2>

                      <p>{post.content}</p>
                      
                      <button>Read More</button>
                    </div>
                </div>
            ))}
        </section>
    </div>
  )
}

export default HomePage;
