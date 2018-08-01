import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/bootstrap-theme.min.css';
import './assets/css/custom.css';

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
                <tr>
                  <td>1</td>
                  <td>안녕하세요</td>
                  <td>권혁찬</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>반갑습니당</td>
                  <td>여현승</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>와 폭염</td>
                  <td>전유민</td>
                </tr>
              </tbody>
            </table>
        </div>

    </div>  
    );
  }
}

export default App;
