
import React from 'react'
import './index.css'
import List from './List/List'
import Chat from './Chat/Chat'
import Details from './Details/Details'
import Login from './Components/Login'
import Notification from './Components/Notification/Notification'


export default function App() {
  const user = true;
  return (
    <div >

      {
        user ?
        <div div className='container'>
        <List />
          <Chat />
          <Details />
          </div> : 
          <div className='contain2'>
          <Login/>
         
          </div>
          
      }
 <Notification/>


    </div>
  )
}
