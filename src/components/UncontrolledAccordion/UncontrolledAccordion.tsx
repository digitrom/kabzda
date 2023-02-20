import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(true)
    const titleHandler = () => setCollapsed(!collapsed)
    return (
        <div>
            <UncontrolledAccordionTitle
                title={props.titleValue}
                titleHandler={titleHandler}
            />
            {!collapsed && <UncontrolledAccordionBody/>}
        </div>
    )
}

type UncontrolledAccordionTitlePropsType = {
    title: string
    titleHandler: () => void
}

function UncontrolledAccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return (
        <div>
            <h3 onClick={props.titleHandler}>{props.title}</h3>
        </div>
    )
}

function UncontrolledAccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}