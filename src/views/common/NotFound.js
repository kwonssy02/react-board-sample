import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Container,
    Row,
    Col
} from "reactstrap";
import { Aperture } from 'react-feather';

class NotFound extends Component {
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
                </Navbar>
                <Container className={'authContent'} style={{minHeight:'100vh'}}>
                    <Row className={'authInnerContent'}>
                        <Col style={{textAlign:'center'}}>
                            <h1>404</h1>
                            <h3>Not Found</h3>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NotFound;