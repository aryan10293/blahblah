import { Fragment } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Form(){
    //how ot write a form in react
    const passwordInputRef = React.useRef()
    const handleSubmit = (event) => {

        event.preventDefault()
        // console.log('submitted')
         console.dir(event.target.elements.inputPassword2.value)
        const password = passwordInputRef.current.value
        console.log(password)
    }
    return (
        <Fragment>
            <h1> Please sign in to enjoy the full experience</h1>
            <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-auto">
                <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                <input type="text"   className="form-control-plaintext" id="staticEmail2" value="email@example.com"/>
            </div>
            <div className="col-auto">
                <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                <input type="text" ref={passwordInputRef} className="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-primary mb-3">Confirm identity</button>
            </div>
            </form>
        </Fragment>
    )
}
export default Form
