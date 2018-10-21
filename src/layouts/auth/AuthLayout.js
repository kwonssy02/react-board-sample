import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavLink,
    Container,
    Row,
    Col,
    UncontrolledCollapse,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import { Aperture } from 'react-feather';

class AuthLayout extends Component {

    onClickSignIn = () => {
        this.props.history.push('/main/home');
    }

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
                        <Col>
                            <h3>Sign in</h3>
                            <Card body>
                                {/* <CardTitle>Sign in</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                                <Form style={{marginBottom:'10px'}}>
                                    <FormGroup>
                                        <Label for="userId">ID</Label>
                                        <Input name="userId" id="userId" placeholder="Enter id" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="password">Password</Label>
                                        <Input type="password" name="password" id="password" placeholder="Enter password" />
                                    </FormGroup>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" />{' '}
                                            Remember me next time
                                        </Label>
                                    </FormGroup>
                                </Form>
                                <Button className={'authButton'} onClick={this.onClickSignIn}>Sign in</Button>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default withRouter(AuthLayout);