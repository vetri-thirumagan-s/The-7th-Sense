import styles from "./home.module.css";

export default function Home() {
    return (
        <div>
            <div className={styles.content}>
                <h1 className={styles.main_content}>7th Sense</h1>
                <h3 className={styles.sub_content}>The Data Driven Mastery</h3>
            </div>
        </div>
    );
}
