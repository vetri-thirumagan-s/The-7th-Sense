import styles from "./pricing.module.css";

export default function Pricing() {
    return (
        <div className={styles.body}>
            <h1 className={styles.header}>The 7 Plus</h1>
            <div className={styles.container}>
                <div className={styles.card1}>
                    <h3 className={styles.price1}>$13.00/Month</h3>
                    <div className={styles.benefits1}>
                        <ul>
                            <li>
                                <h4>Get advanced visualization</h4>
                            </li>
                            <li>
                                <h4>Get future Trends</h4>
                            </li>
                            <li>
                                <h4>Advanced report of your Data </h4>
                            </li>
                            <li>
                                <h4>Real-time alerts</h4>
                            </li>
                            <li>
                                {" "}
                                <h4>ehrub ndj fjdfj</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.card2}>
                    <h3 className={styles.price2}>$130.00/Year</h3>
                    <div className={styles.benefits2}>
                        <ul>
                            <li>
                                <h4>Get advanced visualization</h4>
                            </li>
                            <li>
                                <h4>Get future Trends</h4>
                            </li>
                            <li>
                                <h4>Advanced report of your Data </h4>
                            </li>
                            <li>
                                <h4>Real-time alerts</h4>
                            </li>
                            <li>
                                {" "}
                                <h4>ehrub ndj fjdfj</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
