import React, { Component } from 'react'
import Navbar from './components1/Navbar'
import News from './components1/News'
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export class App extends Component {
  pageSize = 5;
  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} key='general' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='general' />} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key='business' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='business' />} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key='entertainment' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='entertainment' />} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key='general' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='general' />} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key='health' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='health' />} />
            <Route exact path="/science" element={<News setProgress={this.setProgress} key='science' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='science' />} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key='sports' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='sports' />} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress} key='technology' apiKey={this.apiKey} pageSize={this.pageSize} country="us" category='technology' />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App
