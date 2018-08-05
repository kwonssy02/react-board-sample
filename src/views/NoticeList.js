import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoticeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeListData: [
                {
                    noticeId: 1,
                    noticeTitle: '안녕하세요',
                    noticeAuthor: '권혁찬'
                },
                {
                    noticeId: 2,
                    noticeTitle: '반갑습니당',
                    noticeAuthor: '여현승'
                },
                {
                    noticeId: 3,
                    noticeTitle: '와 폭염',
                    noticeAuthor: '전유민'
                }
            ]
        };
    }

    render() {
        const { noticeListData } = this.state;
        return (
            <div>
                <h3>게시물 목록</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>제목</td>
                            <td>작성자</td>
                        </tr>
                    </thead>
                    <tbody>
                        {noticeListData.map((notice) => {
                            return (
                                <tr>
                                    <td>{notice.noticeId}</td>
                                    <td><Link to={'/noticeDetail/' + notice.noticeId}>{notice.noticeTitle}</Link></td>
                                    <td>{notice.noticeAuthor}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default NoticeList;