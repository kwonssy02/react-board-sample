import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="wrapper">

        {/* 사이드바 */}
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

        {/* 페이지 내용 */}
        <div id="content">
            <h3>게시물 목록</h3>
        </div>

    </div>  
    );
  }
}

export default App;
