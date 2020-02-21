import React, {Component} from 'react';
// import logo from './logo.svg';
// import './css/bootstrap.min.css'
// import './css/signin.css'
// import './css/scss/_forms.scss'
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';

class SignIn extends Component {
    constructor(props){
        super(props);
        let loggedIn = false;
        this.state = {
            username: "",
            password:"",
            loggedIn
        }
        this.submitForm = this.submitForm.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e){
        e.preventDefault()
        const {username, password} = this.state

        fetch('http://127.0.0.1:8080/user/signin',{
            method: 'POST',
            mode: 'cors',
            origin: 'http://localhost:3000',
            body: JSON.stringify({
                "username": username,
                "password": password,
            }),
            headers: {
                "Content-type": "Application/json",
            }
        }).then(response => response.json())
            .then(jsondata => {
                localStorage.setItem("token", "ihsdhf9sdg0sdgps")
                    localStorage.setItem("username", username)
                this.setState({loggedIn: jsondata['success']})
            })
            // .then(response => {
            //     const {memes} = response.data
            //     this.setState({loggedIn: memes})
            // })

        // const response = await axios.post(
        //     'http://localhost:8080/user/signin',
        //     { "username": username,
        //         "password": password},
        //     { headers: { 'Content-Type': 'application/json' } }
        // )

        // client({method: 'GET', path: '/api/employees'}).done(response => {
        //     this.setState({employees: response.entity._embedded.employees});
        // });
        // console.log(response.data)

        // if(username === "admin@com" && password === "admin") {
        //     localStorage.setItem("token", "ihsdhf9sdg0sdgps")
        //     localStorage.setItem("username", username)
        //     this.setState({
        //         loggedIn: true
        //     })
        // }
    }
    render() {
        if (this.state.loggedIn === true) {
            return <Redirect to='/home'/>
        }
        return (
            <div className="App" style={{width: 330}}>

                <form className="form-signin" onSubmit={this.submitForm}>
                    <img className="mb-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPtLSlmlgJDSlRN7k-em3GUNK7vfppMwMmCmjJ2pdaomp_s81y"
                         alt="" width="150"   height="150"/>
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <label htmlFor="inputEmail" className="sr-only">Email address</label>
                    <input type="email" id="username" name="username" className="form-control" placeholder="Email address" required
                           autoFocus onChange={this.onChange}/>
                    <label htmlFor="inputPassword" className="sr-only" >Password</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="Password" required=""
                         onChange={this.onChange}/>
                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    <Link to={'/signup'}>
                        <p className="mt-3 mb-3">A New User?</p>
                    </Link>
                    <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
                </form>
            </div>
        );
    }
}

export default SignIn;
