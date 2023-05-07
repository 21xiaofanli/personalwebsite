import React from 'react'
import About from '../homepage/about'
import Mainpage from '../homepage/main'
import SecondaryNavigationBar from '../components/secondarynavbar'
import Pictures from '../homepage/pictures'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../site.css';


export default function Homepage () {
  return (
    <div>
      <div id="layers">
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
        <div class="layer"></div>
      </div>
      <Mainpage></Mainpage>
      <About></About>
      <Pictures></Pictures>
    </div>
  )
}