import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/style.css';
import AuthLayout from 'layouts/auth/AuthLayout';
import MainLayout from 'layouts/main/MainLayout';

class App extends Component {
    render() {    
        return (
            <Router>
                <div>
                    {/* {this.props.location.pathname === '/' ?
                        <Redirect from="/" to="/auth/signIn"/>
                        : null
                    } */}
                    <Route path="/auth" component={AuthLayout} />
                    <Route path="/main" component={MainLayout} />
                </div>  
            </Router>
        );
    }
}

export default App;
