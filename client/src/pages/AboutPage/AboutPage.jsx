import amber from "../../assets/amber-ai.jpg"

import styles from "./AboutPage.module.css";

function AboutPage() {
    return (
        <div className={styles.AboutPage}>
            <h1>About Me</h1>

            <img src={amber} alt="AI generated artwork of Amber" height="250px" width=" 250px" />

            <p>Hey, I'm Amber, a Software Developer from Columbus, Ohio. I'm actively seeking my first role in Software Development, and I'm excited to continue to learn and grow my skills in the meantime! I created this blog as a running portfolio, to give potential employers a more in depth look at my work flow.</p>

            <div className={styles.Links}>
                <a href="https://github.com/amberhunt955" target="blank">GitHub</a>
                <a href="https://www.linkedin.com/in/amberhunt955/" target="blank">LinkedIn</a>
                <a href="https://amberhunt.netlify.app/" target="blank">Portfolio</a>
            </div>
        </div>
    )
}

export default AboutPage;