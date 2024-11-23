import React from 'react'
import './AddUser.css'

export default function AddUser() {
  return (
    <div className='add-user'>
      <form >
        <input type="text" placeholder='User Name' name='UserName' />
        <button>search</button>
      </form>
      <div className="user">
        <div className="details">
            <img src="./avatar.png"/>
            <span>Nandan</span>
        </div>
        <button>Add User</button>
      </div>
    </div>
  )
}
