import React from 'react'


function Section2(props) {
    return(
        <div className="Section">
            <div className="column column-left">
            </div>
            <div className="column column-right">
                <p>{props.paragraph}</p>
            </div>
        </div>
    )
}


export default Section2;