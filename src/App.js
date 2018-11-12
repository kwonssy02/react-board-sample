import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import LoadingScreen from 'react-loading-screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/style.scss';
import ScrollToTop from 'utils/ScrollToTop';
import AuthLayout from 'layouts/auth/AuthLayout';
import MainLayout from 'layouts/main/MainLayout';
import NotFound from 'views/common/NotFound';
import { PrivateRoute } from 'components/PrivateRoute';
import { signIn } from 'store/modules/auth';

class App extends Component {
    constructor(props) {
        super(props);
        
        const userId = localStorage.getItem('userId');
        if(userId) {
            props.dispatch(signIn(userId));
        }
    }

    render() {    
        const { isLoading } = this.props;
        return (
            <Router basename="/react-board-sample">
                <ScrollToTop>
                    <div>
                        <Switch>
                            {/* <Route exact path="/" render={() =>
                                <Redirect from="/" to="/main/home"/>
                            }/> */}
                            <PrivateRoute exact path="/"/>
                            <Route path="/main" component={MainLayout} />
                            <Route path="/auth" component={AuthLayout} />
                            <Route component={NotFound} />
                        </Switch>
                        
                        <LoadingScreen
                            loading={isLoading}
                            bgColor='black'
                            spinnerColor='#9ee5f8'
                        >
                            {''}
                        </LoadingScreen>
                    </div>  
                </ScrollToTop>
            </Router>
        );
    }
}

export default connect(
    state => ({
        isLoading: state.loading.isLoading,
    })
)(App);
