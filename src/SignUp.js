import React, {Component} from 'react';
// import logo from './logo.svg';
import './css/bootstrap.min.css'
import './css/signin.css'
import {Link} from 'react-router-dom'

class SignUp extends Component {

    render() {
        return (
            <div className="App" style={{width: 330}}>

                <form className="form-signin">
                    <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPtLSlmlgJDSlRN7k-em3GUNK7vfppMwMmCmjJ2pdaomp_s81y"
                         alt="" width="150"   height="150"/>
                    <h1 className="h3 mb-3 font-weight-normal">Sign Up for New User!</h1>
                    <label htmlFor="inputFname" className="sr-only">First Name</label>
                    <input type="text" pattern="[A-Z a-z]" id="inputFname" className="form-control" placeholder="First Name" required=""
                           autoFocus=""/>
                    <label htmlFor="inputLname" className="sr-only">Last Name</label>
                    <input type="text" pattern="[A-Z a-z}" id="inputLname" className="form-control" placeholder="Last Name" required=""
                           autoFocus=""/>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required=""
                           autoFocus=""/>
                    <label htmlFor="inputPassword" className="sr-only">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required=""/>
                    <label htmlFor="inputRetypePassword" className="sr-only">Retype Password</label>
                    <input type="password" id="inputRetypePassword" className="form-control" placeholder="Retype Password" required=""/>

                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign Up</button>
                    <Link to={'/signin'}>
                        <p className="mt-3 mb-3">Already have an account?</p>
                    </Link>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
        );
    }
}

export default SignUp;
