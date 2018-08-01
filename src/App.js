import React, { Component } from 'react';

import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/custom.css';

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
                  <a href="#">About</a>
              </li>
              <li>
                  <a href="#">Portfolio</a>
              </li>
              <li>
                  <a href="#">Contact</a>
              </li>
          </ul>
        </nav>

        {/* Page Content */}
        <div id="content">
            <NoticeList />
            <NoticeDetail />
        </div>

    </div>  
    );
  }
}

export default App;
