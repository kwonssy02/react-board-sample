import React, { Component } from 'react';
import { Route, withRouter, NavLink as RRNavLink, Switch, Redirect } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Col,
    Nav,
    NavLink,
    NavItem
} from "reactstrap";
import { Aperture } from 'react-feather';
import authRoutes from 'routes/auth';
// import SignIn from 'views/auth/SignIn';

class AuthLayout extends Component {
    render() {
        return (
            <div>
                {/* Header */}
                <Navbar className={'authHeader'} color={'light'} light expand="md">
                    <NavbarBrand>
                        <Aperture size={25} color={'#30C0AA'}/>
                    </NavbarBrand>
                    <NavbarBrand>
                        Sample Project
                    </NavbarBrand>

                    <Nav className="ml-auto">
                        {authRoutes.map((route, key) => {
                            return (
                                <NavItem key={key}>
                                    <NavLink to={route.path} tag={RRNavLink} style={{color:'black'}}>{route.name}</NavLink>
                                </NavItem>
                            )
                        })}
                    </Nav>
                </Navbar>
                <Container className={'authContent'} style={{minHeight:'100vh'}}>
                    <Row className={'authInnerContent'}>
                        <Col>
                            <Switch>
                                {authRoutes.map((route, key) => {
                                    return (
                                        <Route path={route.path} component={route.component} key={key}/>
                                    )
                                })}
                                <Redirect to="/auth/signIn" />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(AuthLayout);