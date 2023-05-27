import React from 'react'
import NavigationBar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../site.css';
import ScrollingList from '../projects page/list';



export default function ProjectsPage() {
  return (
    <div>
      <NavigationBar absolute = {false}/>
    <ScrollingList/>
    </div>
  )
}