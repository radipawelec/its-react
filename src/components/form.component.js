import React from 'react'


function Form(props) {
    return(
        <div className="Section">
            <div className="column form-column-left">
                <h1><span className="highlight-container"><span className="highlight">{props.title}</span></span></h1>
                <p>{props.paragraph}</p>
            </div>
            <div className="column form-column-right">
                <div className="form">
                    <p><span className="highlight-container"><span className="highlight">Contact</span></span></p>
                    <form action="" id="contact" method="post">
                        <span className="form-item-title">Name</span><br/>
                        <input className="form-item" type="text" id="formName" placeholder="Name..." required/><br/>

                        <span className="form-item-title" htmlFor="formEmail">Email</span><br/>
                        <input className="form-item" type="email" id="formEmail" placeholder="Email..." required/><br/>

                        <span className="form-item-title" htmlFor="formPhone">Phone number</span><br/>
                        <input className="form-item" type="text" id="formName" placeholder="Phone Number..."
                               required/><br/>

                        <span className="form-item-title" htmlFor="formComment">Message</span><br/>
                        <textarea className="form-item" type="text" id="formComment"
                                  placeholder="Questions/Comments..."/><br/>

                        <button className="form-btn" type="submit">Send</button>
                    </form>
                </div>
                {/*<div className="container">*/}
                {/*    <form id="contact" action="" method="post">*/}
                {/*        <fieldset>*/}
                {/*            <input placeholder="Your name" type="text" tabIndex="1" required autoFocus></input>*/}
                {/*        </fieldset>*/}
                {/*        <fieldset>*/}
                {/*            <input placeholder="Your Email Address" type="email" tabIndex="2" required></input>*/}
                {/*        </fieldset>*/}
                {/*        <fieldset>*/}
                {/*            <input placeholder="Your Phone Number" type="tel" tabIndex="3" required></input>*/}
                {/*        </fieldset>*/}
                {/*        <fieldset>*/}
                {/*            <input placeholder="Your Web Site starts with http://" type="url" tabIndex="4" required></input>*/}
                {/*        </fieldset>*/}
                {/*        <fieldset>*/}
                {/*            <textarea placeholder="Type your Message Here...." tabIndex="5" required></textarea>*/}
                {/*        </fieldset>*/}
                {/*        <fieldset>*/}
                {/*            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit*/}
                {/*            </button>*/}
                {/*        </fieldset>*/}
                {/*    </form>*/}


                {/*</div>*/}


            </div>
        </div>
    )
}


export default Form;