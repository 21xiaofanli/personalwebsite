import React from 'react'
import Form from '../contact page/form'
import NavigationBar from '../components/navbar'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../site.css';


export default function ContactPage() {
  return (
    <div>
      <div>
      <NavigationBar color = "text-white"/>
      </div>
        <Form/>
            </div>
  )
}