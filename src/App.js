import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink as RRNavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    NavbarToggler,
    Collapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    ListGroup,
    ListGroupItem,
    UncontrolledCollapse
} from "reactstrap";

import './assets/css/common.css';
import { IoIosMenu, IoIosFlower, IoMdShare, IoMdSpeedometer, IoMdArrowDropdown } from 'react-icons/io';
import Home from './views/Home.js';
import VehicleList from './views/VehicleList';

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: false
        };
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    }

    render() {
        const { active } = this.state;
        return (
            <Router>
                <div>
                    {/* Sidebar */}
                    <Nav id="sidebar" className={active ? 'active' : null} vertical>
                        <NavLink to="/" style={{fontSize:'18px', padding:'1.15rem 1.25rem'}}>
                            <IoIosFlower size={28} color={'#30C0AA'} style={{marginRight:'.75rem'}}/>Sample Project
                        </NavLink>
                        
                        <NavLink to="/" className={'menu'} tag={RRNavLink} style={{fontSize:'15px', padding:'.5rem 1.25rem'}}>
                            <IoMdShare size={23} color={'white'} style={{marginLeft:'.4rem', marginRight:'.75rem'}}/>Home
                        </NavLink>
                        <NavLink to="/vehicleList" className={'menu'} tag={RRNavLink} style={{fontSize:'15px', padding:'.5rem 1.25rem'}} id="toggler">
                            <IoMdSpeedometer size={23} color={'white'} style={{marginLeft:'.4rem', marginRight:'.75rem'}}/>차량 조회
                            <IoMdArrowDropdown style={{position:'absolute', right:'15px', marginTop:'5px'}}/>
                        </NavLink>
                        <UncontrolledCollapse toggler="#toggler">
                            <NavLink to="/vehicleList" className={'submenu'} tag={RRNavLink} style={{fontSize:'15px', paddingTop:'.5rem', paddingBottom:'.5rem', paddingLeft:'4.5rem'}}>
                                차량 검색
                            </NavLink>
                        </UncontrolledCollapse>
                    </Nav>
                    
                    {/* Header */}
                    <Navbar id="header" className={active ? 'active' : null} color="light" light expand="md">
                        <NavbarBrand to="#" tag={RRNavLink} onClick={this.toggle}>
                            <IoIosMenu size={25}/>
                        </NavbarBrand>
                        <NavbarBrand to="#" tag={RRNavLink}>사용자</NavbarBrand>
                        {/* <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink to="/vehicleList" tag={RRNavLink}>차량 조회</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse> */}
                    </Navbar>

                    {/* Content */}
                    <div id="content" className={active ? 'active' : null}>

                        {/* Inner Content */}
                        <Container id="innerContent" fluid style={{padding:'1rem'}}>
                            <Row noGutters>
                                <Col style={{padding:'1rem', background:'#fff'}}>
                                    <Route exact path="/" component={Home} />
                                    <Route path="/vehicleList" component={VehicleList} />
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
            </Router>
        );
    }
}

export default App;
