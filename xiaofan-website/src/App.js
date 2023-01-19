import './App.css';
import React, {Component} from 'react'
import About from './components/about'
import NavigationBar from './components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  render() {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <About></About>
      </div>
    )
  }
}

export default App;
