import React, {Component} from 'react';
// import logo from './logo.svg';
import './css/bootstrap.min.css'
import './css/signin.css'
import {Link, Redirect} from 'react-router-dom'

class Home extends Component {
    constructor(props){
        console.log("AYYOP")
        super(props)
        const token = localStorage.getItem("token")
        const user = localStorage.getItem("username")
        let loggedIn = true

        if (token == null)
            loggedIn = false

        this.state = {
            username: user,
            loggedIn
        }
    }
    render() {
        console.log("WTF")
        if (this.state.loggedIn === false)
            return <Redirect to={"/"}/>
        return (

            <div className="App" style={{width: 330}}>
                <p>Welcome to the page {this.state.username}</p>
                <Link to={'/logout'}> Logout</Link>

                
            </div>
        );
    }
}

export default Home;
