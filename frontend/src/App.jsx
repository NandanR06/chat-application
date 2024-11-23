
import React from 'react'
import './index.css'
import List from './List/List'
import Chat from './Chat/Chat'
import Details from './Details/Details'


export default function App() {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Details/>
    </div>
  )
}
