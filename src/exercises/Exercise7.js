import React, { useState } from "react";
import styles from '../css/exercise7.module.css'

const Exercise7 = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')

    const submitValue = (e) => {
        e.preventDefault()
        alert(`Hello ${fname} ${lname}`)
        setFname('')
        setLname('')
    }

    return (
        <div className={styles.main}>
            <form className={styles.formStyle}>
                <input placeholder="First Name" value={fname} type="text" name="name" className={styles.inputStyle}
                    onChange={(e) => {
                        setFname(e.target.value)
                    }}
                />
                <input placeholder="Last Name" type="text" value={lname} name="name" className={styles.inputStyle}
                    onChange={(e) => {
                        setLname(e.target.value)
                    }}
                />
                <input value="Greet Me" type="submit" className={styles.button}
                    onClick={(e) => submitValue(e)}
                />
            </form>
        </div >
    )
}

export default Exercise7