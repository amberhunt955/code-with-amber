import { useParams } from "react-router-dom";

// import data
import posts from "../../data/posts";

// styling
import styles from "./SinglePostPage.module.css";

function SinglePostPage() {
    const id = useParams();
    const postId = id.postId

    return (
        <div className={styles.SinglePostPage}>
            <h1>{posts[postId].title}</h1>

            <img src={posts[postId].img} alt={posts[postId].alt}/>

            <div className={styles.Content}>{posts[postId].content}</div>

            <p className={styles.Date}>{posts[postId].date}</p>

            <a href="/">Back Home</a>
        </div>
    )
}

export default SinglePostPage;