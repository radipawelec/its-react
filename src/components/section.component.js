import React from 'react'
import Header from "./header.component";


function Section(props) {
    return(
        <div className="Section">
            <div className="column column-left">
                <h1><span className="highlight-container"><span className="highlight">{props.title}</span></span></h1>
                <p>{props.paragraph}</p>
            </div>
            <div className="column column-right">
                {props.contactForm}
            </div>
    </div>
    )
}


export default Section;