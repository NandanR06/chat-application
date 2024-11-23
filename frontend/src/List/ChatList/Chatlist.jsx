import React, { useState } from 'react'
import './Chatlist.css'
import AddUser from '../../Components/AddUser/AddUser';
export default function Chatlist() {
    const [addMode, setAddMode] = useState(false);
    return (
        <div className='chatlist'>
            <div className="classlistInfo">
                <div className="search">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className='plus'
                    onClick={() => (setAddMode((pre) => (!pre)))} />
            </div>

            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>nandan raghu</span>
                    <p>hello</p>
                </div>
                {addMode &&<AddUser/> }
            </div>
        </div>
    )
}
