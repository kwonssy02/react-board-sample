import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link, NavLink as RRNavLink } from "react-router-dom";
import 'assets/css/main.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    Container,
    Row,
    Col,
    UncontrolledCollapse
} from "reactstrap";
import { IoIosMenu, IoIosFlower, IoMdShare, IoMdSpeedometer, IoMdArrowDropdown } from 'react-icons/io';

import mainRoutes from 'routes/main';

class MainLayout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: false,
            toggleButtonStyle: 'black'
        };
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    }

    onMouseEnterToggle = () => {
        this.setState({
            toggleButtonStyle: '#30C0AA'
        });
    }

    onMouseLeaveToggle = () => {
        this.setState({
            toggleButtonStyle: 'black'
        });
    }

    render() {
        const { active, toggleButtonStyle } = this.state;
        return (
            <div>
                {/* Sidebar */}
                <Nav id="sidebar" className={active ? 'active' : null} vertical>
                    <NavLink to="/main/home" className={'homeButton'} tag={RRNavLink} style={{fontSize:'18px', padding:'1.15rem 1.25rem'}}>
                        <IoIosFlower size={28} color={'#30C0AA'} style={{marginRight:'.75rem'}}/>Sample Project
                    </NavLink>
                    
                    {mainRoutes.map((route, key) => {
                        if(route.subRoutes) {
                            let menus = [];
                            menus.push(
                                <NavLink to={"#"} className={'menu'} tag={RRNavLink} style={{fontSize:'15px', padding:'.5rem 1.25rem'}} id={"toggle" + key} key={key}>
                                    <IoMdSpeedometer size={23} color={'white'} style={{marginLeft:'.4rem', marginRight:'.75rem'}}/>{route.name}
                                    <IoMdArrowDropdown style={{position:'absolute', right:'15px', marginTop:'5px'}}/>
                                </NavLink>
                            );
                            
                            route.subRoutes.map((subRoute, subKey) => {
                                menus.push(
                                    <UncontrolledCollapse toggler={"#toggle" + key} key={subKey}>
                                        <NavLink to={subRoute.path} className={'submenu'} tag={RRNavLink} style={{fontSize:'15px', paddingTop:'.5rem', paddingBottom:'.5rem', paddingLeft:'4.5rem'}}>
                                            {subRoute.name}
                                        </NavLink>
                                    </UncontrolledCollapse>
                                )
                            });

                            return menus;
                        }else {
                            return (
                                <NavLink to={route.path} className={'menu'} tag={RRNavLink} style={{fontSize:'15px', padding:'.5rem 1.25rem'}} key={key}>
                                    <IoMdShare size={23} color={'white'} style={{marginLeft:'.4rem', marginRight:'.75rem'}}/>{route.name}
                                </NavLink>
                            )

                        }
                    })}
                    
                </Nav>
                
                {/* Header */}
                <Navbar id="header" className={active ? 'active' : null} color="light" light expand="md">
                    <NavbarBrand onClick={this.toggle} onMouseEnter={this.onMouseEnterToggle} onMouseLeave={this.onMouseLeaveToggle} style={{cursor:'pointer'}}>
                        <IoIosMenu size={25} color={toggleButtonStyle}/>
                    </NavbarBrand>
                    <NavbarBrand >사용자</NavbarBrand>
                </Navbar>

                {/* Content */}
                <div id="content" className={active ? 'active' : null}>

                    {/* Inner Content */}
                    <Container id="innerContent" fluid style={{padding:'1rem'}}>
                        <Row noGutters>
                            <Col style={{padding:'1rem', background:'#fff'}}>
                                {mainRoutes.map((route, key) => {
                                    if(route.subRoutes) {
                                        let subRoutes = [];
                                        route.subRoutes.map((subRoute, subKey) => {
                                            subRoutes.push(
                                                <Route path={subRoute.path} component={subRoute.component} key={subKey}/>    
                                            )
                                        });
                                        return subRoutes;

                                    }else {
                                        return (
                                            <Route path={route.path} component={route.component} key={key}/>
                                        )
                                    }
                                
                                })}
                            </Col>
                        </Row>
                    </Container>

                    {/* Footer */}
                    <div className="footer small" align="right">
                        <ul className="list-inline">
                            <li className="list-inline-item" style={{color:'#6C757D'}}>
                                Developed by 권혁찬
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainLayout;