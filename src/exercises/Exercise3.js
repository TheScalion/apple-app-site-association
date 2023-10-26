import React from "react";
import InputButton from "../common/InputButton";
import styles from '../css/exercise.module.css'

const Exercise3 = () => {
    return (
        <div className={styles.main}>
            <InputButton name="Button 1" />
            <InputButton name="Button 2" />
            <InputButton name="Button 3" />
        </div>
    )
}

export default Exercise3