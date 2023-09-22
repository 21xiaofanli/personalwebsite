import React from 'react'
import About from '../homepage/about'
import Mainpage from '../homepage/main'
import Pictures from '../homepage/pictures'
import NavigationBar from '../components/navbar'
import ScrollingList from '../projects page/list';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../site.css';


export default function Homepage () {
  return (
    <div>
      <NavigationBar color = "text-white" />
      <Mainpage></Mainpage>
      <About></About>
      <ScrollingList/>
      <Pictures></Pictures>
    </div>
  )
}