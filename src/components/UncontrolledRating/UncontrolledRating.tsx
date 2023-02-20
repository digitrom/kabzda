import React, {useState} from "react";

export function UncontrolledRating () {
    let [on, setOn] = useState(0)
        return (
            <div>
                <Star selected={on > 0}/><button onClick={() => setOn(1)}>1</button>
                <Star selected={on > 1}/><button onClick={() => setOn(2)}>2</button>
                <Star selected={on > 2}/><button onClick={() => setOn(3)}>3</button>
                <Star selected={on > 3}/><button onClick={() => setOn(4)}>4</button>
                <Star selected={on > 4}/><button onClick={() => setOn(5)}>5</button>
                {/*<Star selected={props.value > 5}/><button>6</button>*/}
            </div>
        )
    }



type StarPropsType = {
   selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
    }