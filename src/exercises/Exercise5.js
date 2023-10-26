import React, { useState } from "react";
import styles from '../css/exercise.module.css'
import Input from "../common/button";

const Item = ({ value }) => {
    return (
        <li>
            {value}
        </li>
    )
}

const Exercise5 = () => {

    const array = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

    return (
        <div className={styles.main}>
            <ul>
                {array?.map((item) => {
                    return <Item value={item} />
                })

                }
            </ul>
        </div>
    )
}

export default Exercise5