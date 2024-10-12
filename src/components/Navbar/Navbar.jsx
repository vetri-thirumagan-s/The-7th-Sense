import styles from "./navbar.module.css";

const link = {
    textDecoration: "none",
    color: "white",
};

export default function Navbar() {
    return (
        <div>
            <nav className={styles.navbar}>
                <a href="/" style={link}>
                    Home
                </a>
                <a href="/about_us" style={link}>
                    About Us
                </a>
                <a href="/analytics" style={link}>
                    Analytics
                </a>
                <a href="/pricing" style={link}>
                    Pricing
                </a>
                <a href="/contact_us" style={link}>
                    Contact Us
                </a>
            </nav>
            <header className={styles.header}>
                <h1>The 7th Sense</h1>
            </header>
        </div>
    );
}
