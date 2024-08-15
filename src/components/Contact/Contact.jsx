import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">maksymilian.galuszka@op.pl</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/instagram.png")}
            alt="Instagram icon"
          />
          <a href="https://www.instagram.com/maksiu_galuszka">instagram.com/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/urewo396</a>
        </li>
      </ul>
    </footer>
  );
};
