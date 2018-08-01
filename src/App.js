import React, { Component } from 'react';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/custom.css';

import Home from './views/Home.js';
import NoticeList from './views/NoticeList.js';
import NoticeDetail from './views/NoticeDetail.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">

        {/* Sidebar */}
        <nav id="sidebar">
          
          <h3>Bootstrap Sidebar</h3>

          <ul>
              <li>
                  <a href="#">메인</a>
              </li>
              <li>
                  <a href="#">게시물 목록</a>
              </li>
          </ul>
        </nav>

        {/* Page Content */}
        <div id="content">
            <Home />
            <NoticeList />
            <NoticeDetail />
        </div>

    </div>  
    );
  }
}

export default App;
