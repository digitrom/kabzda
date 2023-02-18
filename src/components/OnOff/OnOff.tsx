import React from "react";

type OnOffPropsType = {
    on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    paddingLeft: "10px",
    backgroundColor: props.on ? "green" : 'white'

}
const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    paddingLeft: "10px",
    marginLeft: "2px",
    backgroundColor: !props.on ? "red" : 'white'
}
const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : 'red'
}
        return (
            <div>
                <div style={onStyle}>on</div>
                <div style={offStyle}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        )
}