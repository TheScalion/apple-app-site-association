import React from "react";

const InputButton = (props) => {
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "30px",
            backgroundColor: "#a19f9f",
            width: "80px",
            margin: "10px",
            borderRadius: "10px"
        }}
            onClick={() => alert(`you clicked ${props.name}`)}>
            {props.name}
        </div >
    )
}

export default InputButton