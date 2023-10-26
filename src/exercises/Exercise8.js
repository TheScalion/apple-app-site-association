import React from "react";
import styles from '../css/exercise8.module.css'

const Component = ({ item }) => {
    return (
        <div className={styles.component}>
            <p className={styles.titleText}>{item.setup}</p>
            <p className={styles.ansText}>{item.puchline}</p>
        </div>
    )
}

const Exercise8 = () => {

    const data = [
        {
            id: 1,
            setup: "what is the best thing that sound worst ?",
            puchline: "when you find worst case"
        },
        {
            id: 1,
            setup: "what is the best thing that sound worst ?",
            puchline: "when you find worst case"
        },
        {
            id: 1,
            setup: "what is the best thing that sound worst ?",
            puchline: "when you find worst case"
        },
        {
            id: 1,
            setup: "what is the best thing that sound worst ?",
            puchline: "when you find worst case"
        }
    ]

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.itemContainer}>
                    {data.map((item) => {
                        return <Component item={item} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Exercise8;