import React, {Component} from 'react'
import About from './components/about'
import NavigationBar from './components/navbar'
import Homepage from './components/homepage'
import SecondaryNavigationBar from './components/secondarynavbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './site.css';
class App extends Component {
  render() {
    return (
      <div>
                 <div id="layers" >
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>   
        </div>
        <SecondaryNavigationBar/>
        <Homepage></Homepage> 
        <About></About>
      </div>
    )
  }
}

export default App;
