import React, { Component } from 'react';
import ContentCard from 'components/ContentCard';

class NoticeDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notice: {
                "id": '',
                "first_name": '',
                "last_name": '',
                "avatar": ''
            }
        }
    }

    componentDidMount() {
        console.log(this.props.match);
        const url = `https://reqres.in/api/users/${this.props.match.params.id}`;
            
        fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data.data);
            this.setState({
                notice: data.data
            });
        });

    }
    render() {
        const { notice } = this.state;
        return (
            <div>
                <ContentCard title={`${notice.first_name} ${notice.last_name}`}>
                    id: {notice.id}
                    fn: {notice.first_name}
                </ContentCard>
            </div>
        );
    }
}

export default NoticeDetail;