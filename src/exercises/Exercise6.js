import React from "react";
import styles from '../css/exercise5.module.css'

const Item = ({ item }) => {
    return (
        <div className={styles.itemView} key={item.id}>
            {item.icon + " " + item.name}
        </div>
    )
}

const Exercise6 = () => {
    const data = [
        { id: 1, name: "dog", icon: "🐕" },
        { id: 2, name: "cat", icon: "🐈" },
        { id: 3, name: "chiken", icon: "🐓" },
        { id: 4, name: "cow", icon: "🐄" },
        { id: 5, name: "sheep", icon: "🐑" },
        { id: 6, name: "horse", icon: "🎠" },
    ]

    return (
        <div className={styles.main}>
            {data?.map((item) => {
                return <Item item={item} />
            })}
        </div >
    )
}

export default Exercise6