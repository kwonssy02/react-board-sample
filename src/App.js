import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import MainLayout from 'layouts/main/MainLayout';

class App extends Component {
    
    render() {    
        return (
            <Router>
                <div>
                    {/* <Redirect to="/main/home" /> */}
                    <Route path="/main" component={MainLayout} />
                </div>  
            </Router>
        );
    }
}

export default App;
