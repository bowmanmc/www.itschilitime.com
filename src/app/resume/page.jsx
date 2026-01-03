import Summary from "./_components/summary";
import Skills from "./_components/skills";
import styles from "./page.module.css";


// Resume page - www.itschilitime.com/resume
export const metadata = {
  title: "Michael Bowman - Resume",
  description: "Michael Bowman is a software engineer and educator from Dayton, Ohio. This is his resume.",
  url: "https://www.itschilitime.com/resume",
};


export default function Resume() {
    return (
        <main className={styles["main-content"]}>
            <Summary />
            <Skills />
        </main>
    );
}
