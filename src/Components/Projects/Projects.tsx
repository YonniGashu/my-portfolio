import styles from "./Projects.module.css";
import { ProjectBox } from "../ProjectBox/ProjectBox";
import TindogImage from "../../images/TindogImage.png";

export const Projects = () => {
  return (
    <div id="projects">
      <h1 className={styles.projectHeading}>
        My <b>Projects</b>
      </h1>
      <div className={styles.project}>
        <ProjectBox projectPhoto={TindogImage} projectName="ElderCircle" />
      </div>
    </div>
  );
};
