import React from 'react'
import './List.css'
import Userinfo from './UserInfo/Userinfo'
import Chatlist from './ChatList/Chatlist'
export default function List() {
  return (
    <div className='list'>
      <Userinfo/>
      <Chatlist/>
    </div>
  )
}
