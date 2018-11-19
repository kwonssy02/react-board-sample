import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import ContentCard from 'components/ContentCard';
import ContentRow from 'components/ContentRow';
import ContentCol from 'components/ContentCol';
import ReactQuill from 'react-quill';
import { Button, Label, Input } from 'reactstrap';
import DatePicker from 'react-datepicker';

class NoticeWrite extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            text: '',
            date: undefined
        } 
        
    }

    handleChange = (value) => {
        this.setState({ text: value })
    }

    onClickSaveButton = () => {

    }
    
    onClickCancelButton = () => {
        this.props.history.push('/main/pages/noticeList');
    }

    onChangeDate = (newDate) => {
        console.log('onChangeDate');
        console.log(newDate);
        this.setState({
            date: newDate
        })
    }

    render() {
        const { date } = this.state;
        return (
            <Fragment>
                <ContentCard>
                    <ContentRow>
                        <ContentCol md={6}>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </ContentCol>
                        <ContentCol md={6}>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </ContentCol>
                    </ContentRow>
                    <ContentRow>
                        <ContentCol md={6}>
                            <Label for="exampleCity">City</Label>
                            <Input type="text" name="city" id="exampleCity"/>
                        </ContentCol>
                        <ContentCol md={4}>
                            <Label for="exampleState">State</Label>
                            <Input type="text" name="state" id="exampleState"/>
                        </ContentCol>
                        <ContentCol md={2}>
                            <Label for="exampleZip">Zip</Label>
                            <Input type="text" name="zip" id="exampleZip"/>
                        </ContentCol>
                    </ContentRow>
                    <ContentRow>
                        <ContentCol style={{paddingLeft:'2.25rem'}}>
                            <Input type="checkbox" name="check" id="exampleCheck"/>
                            <Label for="exampleCheck">Check me out</Label>
                        </ContentCol>
                    </ContentRow>
                    <ContentRow>
                        <ContentCol>
                            <Label>Content</Label>
                            <ReactQuill 
                                value={this.state.text} 
                                onChange={this.handleChange} 
                                modules={{
                                    // http://quilljs.com/docs/formats/
                                    toolbar: {
                                        container: [
                                            [{ 'size': [ 'small', false, 'large', 'huge' ]}],
                                            [{ 'align': [] }, 'bold', 'italic', 'underline', { color: []}],
                                            [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                                            ['code-block', 'link', 'image'],
                                            ['clean']
                                        ],
                                    }
                                }}
                                placeholder='Enter Content...'
                                bounds={'#innerContent'}
                            />
                        </ContentCol>
                    </ContentRow>
                    <ContentRow>
                        <ContentCol>
                            <DatePicker
                                selected={date}
                                onChange={this.onChangeDate}
                                placeholderText="Enter "
                                dateFormat="YYYY-MM-dd"
                            />
                            {/* <DatePicker valule={date} onChange={this.onChangeDate}/> */}
                        </ContentCol>
                    </ContentRow>
                    <ContentRow>
                        <ContentCol>
                            <Button color='primary' onClick={this.onClickSaveButton}>Save</Button>{' '}
                            <Button outline color='secondary' onClick={this.onClickCancelButton}>Cancel</Button>
                        </ContentCol>
                    </ContentRow> 
                </ContentCard>
            </Fragment>
        );
    }
}

export default withRouter(NoticeWrite);