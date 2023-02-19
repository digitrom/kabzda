import React, {useState} from "react";

type OnOffPropsType = {
    // on: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false)

    const onHandler = () => setOn(true)
    const offHandler = () => setOn(false)

const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    paddingLeft: "10px",
    backgroundColor: on ? "green" : 'white'

}
const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    paddingLeft: "10px",
    marginLeft: "2px",
    backgroundColor: !on ? "red" : 'white'
}
const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    border: "1px solid black",
    display: "inline-block",
    marginLeft: "5px",
    backgroundColor: on ? "green" : 'red'
}

        return (
            <div>
                <div style={onStyle} onClick={onHandler}>on</div>
                <div style={offStyle} onClick={offHandler}>off</div>
                <div style={indicatorStyle}></div>
            </div>
        )
}