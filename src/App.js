import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import LoadingScreen from 'react-loading-screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/style.css';
import ScrollToTop from 'utils/ScrollToTop';
import AuthLayout from 'layouts/auth/AuthLayout';
import MainLayout from 'layouts/main/MainLayout';

class App extends Component {
    render() {    
        return (
            <Router>
                <ScrollToTop>
                    <div>
                        {/* {this.props.location.pathname === '/' ?
                            <Redirect from="/" to="/auth/signIn"/>
                            : null
                        } */}
                        <Route path="/auth" component={AuthLayout} />
                        <Route path="/main" component={MainLayout} />
                        
                        <LoadingScreen
                            loading={false}
                            bgColor='black'
                            spinnerColor='#9ee5f8'
                            style={{opacity:0.5}}
                        /> 
                    </div>  
                </ScrollToTop>
            </Router>
        );
    }
}

export default App;
