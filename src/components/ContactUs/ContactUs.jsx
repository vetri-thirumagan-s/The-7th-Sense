import styles from "./contactus.module.css";

export default function Contact_Us() {
    return (
        <div>
            <h1 className={styles.header}>Contact</h1>
            <div className={styles.sub_content}>
                <h4>Our Community would love to hear from you!</h4>
                <h4>
                    <img
                        src="data:image/webp;base64,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"
                        alt=""
                        height="25"
                        width="25"
                    />
                    :
                    <a href="mailto:the7thsense@gmail.com">
                        the7thsense@gmail.com
                    </a>
                </h4>
                <h4>
                    <img
                        src="data:image/webp;base64,UklGRtADAABXRUJQVlA4IMQDAADwFgCdASpwAHAAPrUyrVanIicnFJDgFolpABXjfX1/oLI3+KNB3Y/LoYYaUeaT5P9Qbo5pJYcrBS+4FSRE48mKBKtZwBNVkiZblk+up1dqqTnayz7w8NXlWwPLgcedTnAOnDyCxe/c1voQ8lmNmBMtDLYtGXDt36yBlMnVoVKN5MwEAxJNLmQcrFxyAXS5pz61UdXQO/oOzKuyfhF3pJdSYk74lTUyZM4u9XTqLwvj68GvHTiquRJLJPPtCj3fqQAA/vlXGk/28P+v/TTI15xWLSVPCS0b1DqAP3AoNN+dqDn+zLxP+YXDETpKJ1y9WtIpN1awL8TJUHXBYjlilKyaB7u4VRMQfOzsvfX+Tbg7VLiGgCCmODIcV6YymWZbbIBrSNoq5/CDiEjGEJQZWvB0Ts/mk79MLdRcTPAm3jIHTfhvD1ACgAEtDgz6B1l0VZDqAJGg3euOoXz/0TvvNf7PQa20fG3S0oAXA+0YBYMpMHJjTiHqmS9y/75FpsqDU0TGx+EHB0DMxDfudVwD2irQbAEM/hPCxyXY4VKnQ+hIjfTgcs5KSkGzb0RIU9Dhw5iI7dx3liMNbS9UrrqCSwbAJw3adOz+hRh9ybOYyPjeirstFmMK5ysqUYW5pWZw2htjNB+vfl75DwRiuYASx67FFO4JJIooB8hBAeuzCgXaw88KQOxEoARIZGwdXr4OQ3hfvcNv4uyC+elyFdM03TKgI0a7Tljw+2wOIB0SByDbnuYfH9VDawhd5fhDFDdoErKypKzBpMPa67nch+wvQXnAO9GJV7RysdSVqjGHvjf/qfL8kz9lXMgda1Vo2xzWAiW8G3vvhDffOX2BQ9eK3OrphZNhh73/xfxPRrTzykTvCpqix7DHnDZP9VFjDw7WM+8Q7sfoBsiZbRlPXm50ojzlW1MuKCJzmcjJxudDkvKFzlFobZswB3POCFE7ph3cYSadrrmySc/jRMppQDgCVIvtyUhwaV1PBiZwVctExyQMy7BY2a9dLatMAmqwIWysbr4OcUhgT3tYIjPAf5/UTGzZV3bu3nj1t9YLEMTuFXkjW7rnNpiRMwIQgN4o3lF1/KB+948YnxywpyQ2CZIdoXS+iijNhUnFHl3fRJU2lTEWzBdS2PuOiCb6DPYEi/6w9GAiR1sc81eqBO4psas3sSJzS9TCbEc5LbkJd/b+bb5kpFuI9kw+SecZ3D+jvEDD65ThlcYYLeSPYSU2iZTr3uDo2LiRN5QBwAvjQPHHvqjvnImKrSIEwzS7r+fXJp3xycGAAAAA"
                        alt=""
                        height="25"
                        width="25"
                    />
                    :<a href="">The 7th Sense</a>
                </h4>
            </div>
            <footer>
                <div>
                    <h3 className={styles.text}>
                        Thank you to supporting our community.
                    </h3>
                </div>
            </footer>
        </div>
    );
}
