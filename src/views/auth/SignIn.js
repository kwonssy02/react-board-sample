import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
    Card,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback
} from "reactstrap";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            password: '',
            isInvalidUserId: false,
            isInvalidPassword: false
        }
    }

    onClickSignIn = () => {
        const { userId, password } = this.state;
        let isInvalidUserId = false;
        let isInvalidPassword = false;

        if(userId === '') {
            isInvalidUserId = true;
        }

        if(password === '') {
            isInvalidPassword = true;
        }

        this.setState({
            isInvalidUserId,
            isInvalidPassword
        });

        if(isInvalidUserId || isInvalidPassword) {
            return;
        }
        
        this.props.history.push('/main/home');
    }

    onChangeUserId = (event) => {
        this.setState({
            userId: event.target.value
        })
    }

    onChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        const { isInvalidUserId, isInvalidPassword } = this.state;
        return (
            <div>
                <h3>Sign in</h3>
                <Card body>
                    {/* <CardTitle>Sign in</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
                    <Form style={{marginBottom:'10px'}}>
                        <FormGroup>
                            <Label for="userId">ID</Label>
                            <Input 
                                invalid={isInvalidUserId}
                                name="userId" 
                                id="userId" 
                                placeholder="Enter id" 
                                onChange={this.onChangeUserId}
                            />
                            <FormFeedback invalid={"true"}>아이디는 필수 입력값입니다.</FormFeedback>
                            {/* <FormText>Example help text that remains unchanged.</FormText> */}
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input 
                                invalid={isInvalidPassword}
                                type="password" 
                                name="password" 
                                id="password" 
                                placeholder="Enter password" 
                                onChange={this.onChangePassword}
                            />
                            <FormFeedback invalid={"true"}>비밀번호는 필수 입력값입니다.</FormFeedback>
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
            </div>
        );
    }
}

export default withRouter(SignIn);