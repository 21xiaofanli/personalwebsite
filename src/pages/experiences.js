import React from 'react'
import CustomizedTimeline from '../experiences page/timeline'
import NavigationBar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../site.css';

export default function ExperiencePage() {
  return (
    <div>
      <NavigationBar/>
      <CustomizedTimeline/>
    </div>
  )
}