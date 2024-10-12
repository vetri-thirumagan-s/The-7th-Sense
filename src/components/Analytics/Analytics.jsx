import styles from "./analytics.module.css";
import { Label, FileInput } from "flowbite-react";

const buttons = {
    marginRight: "66px",
};

export default function Analytics() {
    return (
        <div>
            <div className={styles.block}>
                <Label htmlFor="dropzone-file" className={styles.label}>
                    <div className={styles.file_input}>
                        <div className={styles.image}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="95"
                                height="120"
                                viewBox="0 0 512 512"
                                id="upload"
                            >
                                <path d="M398.1 233.2c0-1.2.2-2.4.2-3.6 0-65-51.8-117.6-115.7-117.6-46.1 0-85.7 27.4-104.3 67-8.1-4.1-17.2-6.5-26.8-6.5-29.5 0-54.1 21.9-58.8 50.5C57.3 235.2 32 269.1 32 309c0 50.2 40.1 91 89.5 91H224v-80h-48.2l80.2-83.7 80.2 83.6H288v80h110.3c45.2 0 81.7-37.5 81.7-83.4 0-45.9-36.7-83.2-81.9-83.3z"></path>
                            </svg>
                        </div>
                        <p className={styles.text}>
                            Click to upload or drag and drop
                        </p>

                        <FileInput id="dropzone-file" className="hidden" />
                    </div>
                </Label>
            </div>
            <div className={styles.buttons}>
                <button
                    type="submit"
                    className={styles.analyze}
                    style={buttons}
                >
                    Analyze
                </button>
                <button type="submit" className={styles.chat} style={buttons}>
                    Chat with data
                </button>
            </div>
        </div>
    );
}
