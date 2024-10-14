import styles from "./chatbot.module.css";

export default function Chatbot() {
    return (
        <div>
            <div className={styles.chatcontainer}>
                <div className={styles.convos}></div>
                <div className={styles.input_box}>
                    <input
                        type="text"
                        className={styles.text_input}
                        placeholder="Start ur Convo..."
                    />
                    <button type="submit" className={styles.button}>
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
