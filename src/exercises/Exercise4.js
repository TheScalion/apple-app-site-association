import React, { useState } from "react";
import styles from '../css/exercise.module.css'
import Input from "../common/button";

const Exercise4 = () => {

    const [count, setCount] = useState(0)

    return (
        <>
            <div className={styles.main}>
                <h5>Button Has been clicked : {count} times</h5><br />
                <Input value={"Click Me"} onClick={() => setCount(count + 1)} />
            </div>
        </>
    )
}

export default Exercise4