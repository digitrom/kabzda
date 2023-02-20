import React, {useState} from "react";

export function UncontrolledRating() {
    let [on, setOn] = useState(0)
    return (
        <div>
            <Star selected={on > 0} on={1} setOn={setOn}/>
            <Star selected={on > 1} on={2} setOn={setOn}/>
            <Star selected={on > 2} on={3} setOn={setOn}/>
            <Star selected={on > 3} on={4} setOn={setOn}/>
            <Star selected={on > 4} on={5} setOn={setOn}/>
        </div>
    )
}

type StarPropsType = {
    on: number
    selected: boolean
    setOn: (value:number) => void
}

function Star(props: StarPropsType) {
    const onClickStarHandler = () => props.setOn(props.on)
    // if (props.selected === true) {
    //     return <span><b>star</b> </span>
    // } else {
    //     return <span>star </span>
    // }
    return props.selected
        ? <span onClick={onClickStarHandler}><b>star</b> </span>
        : <span onClick={onClickStarHandler}>star </span>
}