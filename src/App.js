import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/custom.css';

import Home from './views/Home.js';
import NoticeList from './views/NoticeList.js';
import NoticeDetail from './views/NoticeDetail.js';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="wrapper">

                {/* Sidebar */}
                <nav id="sidebar">
                
                <h3>Bootstrap Sidebar</h3>

                <ul>
                    <li>
                        <Link to="/">메인</Link>
                    </li>
                    <li>
                        <Link to="/noticeList">게시물 목록</Link>
                    </li>
                </ul>
                </nav>

                {/* Page Content */}
                <div id="content">
                    <Route exact path="/" component={Home} />
                    <Route path="/noticeList" component={NoticeList} />
                    <Route path="/noticeDetail" component={NoticeDetail} />
                </div>

            </div>  
        </Router>
    );
  }
}

export default App;
