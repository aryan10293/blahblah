import { Fragment } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
function Form(){
    //how ot write a form in react
    const number = [1,2,3,4,5,6,7,8,9,0].map(x => x.toString())
    const passwordInputRef = React.useRef()
    const [password, setPassword] = React.useState('')

    // checking if passowrd contains a number 
    let hasNumber = false
    let error = true

    //looping throgh password to check if it has a number 
    password.split('').forEach(x => {
        if(number.includes(x) && password.length >= 8) hasNumber = true
    })

    error = hasNumber ? null : 'passworns needs at least 1 number'

    const handleSubmit = (event) => {
        event.preventDefault()
         console.dir(event.target.elements.inputPassword2.value)
        const password = passwordInputRef.current.value
        console.log(password)
    }
    const handleChange = (event) => {
        setPassword(event.target.value)
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
                <input type="text" ref={passwordInputRef} onChange={handleChange} className="form-control" id="inputPassword2" placeholder="Password"/>
            </div>
            <span style={{
                color: 'red'
            }}>{error}</span>
            <div className="col-auto">
                <button type="submit" disabled={Boolean(error)} className="btn btn-primary mb-3">Confirm identity</button>
            </div>
            </form>
        </Fragment>
    )
}
export default Form
