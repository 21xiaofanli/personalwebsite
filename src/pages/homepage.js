import React from 'react'
import About from '../homepage/about'
import Mainpage from '../homepage/main'
import Pictures from '../homepage/pictures'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../site.css';


export default function Homepage () {
  return (
    <div>
      <Mainpage></Mainpage>
      <About></About>
      <Pictures></Pictures>
    </div>
  )
}