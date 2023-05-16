import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import styles from "./WritePostPage.module.css";

function WritePostPage() {
  const [value, setValue] = useState(null);

  return (
    <div className={styles.WritePostPage}>
      <form className={styles.WritePost}>
        <input placeholder="Title" />
        
        <input type="date" />

        <ReactQuill theme="snow" value={value} onChange={setValue} />
        
        <br />
        
        <input type="file" />
        
        <button>Publish</button>
      </form>
    </div>
  );
}

export default WritePostPage;
