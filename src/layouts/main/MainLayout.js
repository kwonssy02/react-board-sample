import React, { Component } from 'react';
import { Route, Link, NavLink as RRNavLink, withRouter, Redirect, Switch } from "react-router-dom";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledCollapse,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownItem,
    DropdownMenu
} from "reactstrap";
import windowSize from 'react-window-size';
import { Target, ChevronDown, Settings, AlignLeft } from 'react-feather';
import mainRoutes from 'routes/main';

class MainLayout extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            active: false,
            toggleButtonStyle: 'black',
            currentPath: '',
            isWindowSmall: false,
        };
    }

    static getDerivedStateFromProps(props, state) {
        
        let { currentPath } = state;
        let isWindowSmall = false;

        if(currentPath !== props.location.pathname) {
            currentPath = props.location.pathname;
        }

        if(props.windowWidth <= 768) {
            isWindowSmall = true;
        }

        return {
            currentPath,
            isWindowSmall
        }
    }

    getCurrentPageName = (currentPath) => {
        for(var i=0; i<mainRoutes.length; i++) {
            const route = mainRoutes[i];
            if(route.path === currentPath) {
                return route.name;
            }
            if(route.subRoutes) {
                for(var j=0; j<route.subRoutes.length; j++) {
                    const subRoute = route.subRoutes[j];
                    if(subRoute.path === currentPath) {
                        return subRoute.name;
                    }
                }
            }
        }
        return '';
    }

    toggle = () => {
        this.setState({
            active: !this.state.active
        });
    }

    menuDropdownToggle = (menuId) => {

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

    signOut = () => {
        this.props.history.push('/auth/signIn');
    }

    render() {
        const { active, toggleButtonStyle, currentPath, isWindowSmall } = this.state;
        return (
            <div>
                {/* Sidebar */}
                <Nav id="sidebar" className={active ? 'active' : null} vertical>
                    <NavLink to="/main/components/" className={'homeButton'} tag={Link} style={{fontSize:'1rem', padding:'1.15rem 1.25rem', marginBottom:'1.5rem'}} onClick={isWindowSmall ? this.toggle : null}>
                        <Target size={28} color={'#30C0AA'} style={{marginRight:'.75rem'}}/>Sample Project
                    </NavLink>
                    
                    {mainRoutes.map((route, key) => {
                        if(route.subRoutes) {
                            return (
                                <div key={key}>
                                <NavLink to={"#"} className={'menu'} tag={RRNavLink} key={key} id={"toggle" + key}>
                                    <route.icon size={20} color={'white'} style={{marginLeft:'.4rem', marginRight:'.75rem'}}/>
                                    {route.name}
                                    <ChevronDown size={14} style={{position:'absolute', right:'1rem', marginTop:'5px'}}/>
                                </NavLink>
                                <UncontrolledCollapse toggler={"#toggle" + key}>
                                    {route.subRoutes.map((subRoute, subKey) => {
                                        return (
                                            <NavLink to={subRoute.path} className={'submenu'} tag={RRNavLink} style={{fontSize:'1rem', paddingTop:'.5rem', paddingBottom:'.5rem', paddingLeft:'4.5rem'}} onClick={isWindowSmall ? this.toggle : null} key={subKey}>
                                            {subRoute.name}
                                            </NavLink>
                                        )
                                    })}
                                </UncontrolledCollapse>
                                </div>
                            )
                            
                        }else {
                            return (
                                <NavLink to={route.path} className={'menu'} tag={RRNavLink} key={key} onClick={isWindowSmall ? this.toggle : null}>
                                    <route.icon size={20} color={'white'} style={{marginLeft:'.4rem', marginRight:'.75rem'}}/>
                                    {route.name}
                                </NavLink>
                            )

                        }
                    })}
                </Nav>
                
                {/* Header */}
                <Navbar id="header" className={active ? 'active' : null} color="light" light>
                    <NavbarBrand onClick={this.toggle} onMouseEnter={this.onMouseEnterToggle} onMouseLeave={this.onMouseLeaveToggle} style={{cursor:'pointer'}}>
                        <AlignLeft size={25} color={toggleButtonStyle}/>
                    </NavbarBrand>
                    <NavbarBrand>
                        {this.getCurrentPageName(currentPath)}
                    </NavbarBrand>
                    <Nav className="ml-auto">
                        <UncontrolledDropdown>
                            <DropdownToggle nav style={{color:'black'}}>
                                <Settings size={20}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.signOut}>
                                    Sign out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>

                {/* Content */}
                <div id="content" className={active ? 'active' : null}>
                    {/* Inner Content */}
                    <div id="innerContent" style={{padding:'1rem'}}>
                        <Switch>
                            {mainRoutes.map((route, key) => {
                                if(route.subRoutes) {
                                    let subRoutes = [];
                                    route.subRoutes.map((subRoute, subKey) => {
                                        subRoutes.push(
                                            <Route path={subRoute.path} component={subRoute.component} key={subKey}/>    
                                        )
                                        return null;
                                    });
                                    return subRoutes;

                                }else {
                                    return (
                                        <Route path={route.path} component={route.component} key={key}/>
                                    )
                                }
                            })}
                            <Redirect to="/main/components/buttons"/>
                        </Switch>
                    </div>

                    {/* Footer */}
                    <div className="footer small" align="right">
                        <ul className="list-inline">
                            <li className="list-inline-item" style={{color:'#6C757D'}}>
                                Developed by 권혁찬
                            </li>
                        </ul>
                    </div>
                </div>

                <div id={'overlay'} className={active ? 'active' : null} onClick={this.toggle}/>
            </div>
        );
    }
}

export default withRouter(windowSize(MainLayout));