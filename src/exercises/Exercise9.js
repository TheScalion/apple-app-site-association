import React, { useState, useEffect } from "react";
import styles from '../css/exercise9.module.css'
import './Flipcardstyle.css';
const Component = ({ item }) => {
    return (
        <>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img src={item.avatar} alt="Norway" className={styles.imageStyle} />
                        <h3>{item.first_name + " " + item.last_name}</h3>
                        <p>{item.employment.title}</p>
                    </div>
                    <div class="flip-card-back">
                        <h1>More Information</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

const Exercise9 = () => {

    const [data, setData] = useState('')
    const [render, setRender] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://random-data-api.com/api/users/random_user?size=10")
            const response = await res.json()
            console.log("Respose Data from====>", response)
            setData(response)
        }
        fetchData()
    }, [render])

    return (
        <>
            <div className={styles.main}>
                <input value="Fetch Random" type="submit" className={styles.button}
                    onClick={() => setRender({})}
                />
            </div>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.itemContainer}>
                        {data && data.map((item) => {
                            return <Component item={item} />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exercise9;