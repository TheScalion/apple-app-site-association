import React from "react";
import styles from '../css/exercise.module.css'
import Input from "../common/button";

const Exercise2 = () => {
    return (
        <div className={styles.main}>
            <Input value={"Click Me"} onClick={() => alert("Clicked")} />
        </div>
    )
}

export default Exercise2;