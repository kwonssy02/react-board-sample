import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback
} from "reactstrap";
import ContentRow from 'components/ContentRow';
import ContentCol from 'components/ContentCol';
import ContentCard from 'components/ContentCard';
import { signIn } from 'store/modules/auth';

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
        localStorage.setItem('userId', userId);
        this.props.dispatch(signIn(userId));
        this.props.history.push('/main');
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
                <ContentCard>
                    <ContentRow>
                        <ContentCol>
                            <h3>Sign in</h3>
                        </ContentCol>
                    </ContentRow>
                    <Form style={{marginBottom:'1rem'}}>
                        <FormGroup>
                            <Input 
                                invalid={isInvalidUserId}
                                placeholder="ID" 
                                onChange={this.onChangeUserId}
                            />
                            <FormFeedback invalid={"true"}>ID is required.</FormFeedback>
                            {/* <FormText>Example help text that remains unchanged.</FormText> */}
                        </FormGroup>
                        <FormGroup>
                            <Input 
                                invalid={isInvalidPassword}
                                type="password" 
                                placeholder="Password" 
                                onChange={this.onChangePassword}
                            />
                            <FormFeedback invalid={"true"}>Password is required.</FormFeedback>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" />{' '}
                                Remember me next time
                            </Label>
                        </FormGroup>
                    </Form>
                    <ContentRow>
                        <ContentCol>
                            <Button className={'authButton'} onClick={this.onClickSignIn}>Sign in</Button>
                        </ContentCol>
                        <ContentCol right>
                            <Button color="link">Forgot Password?</Button>
                        </ContentCol>
                    </ContentRow>
                </ContentCard>
            </div>
        );
    }
}

export default connect(null)(withRouter(SignIn));