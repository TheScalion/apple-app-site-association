import React from "react";

const Input = ({ value, onClick }) => {
    return (
        <>
            <input value={value} type="button" onClick={() => onClick()} style={{ margin: 10 }} />
        </>
    )
}

export default Input