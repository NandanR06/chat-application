import React, { useEffect, useRef, useState } from 'react'
import './Chat.css'
import EmojiPicker from 'emoji-picker-react'
import SendIcon from '@mui/icons-material/Send';
export default function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const end = useRef();

  useEffect(() => {
    end.current.scrollIntoView({ behavior: "smooth" })
     }, []);


  const handleEmogi = (e) => {
    console.log(e);
    setText((prv) => (prv + e.emoji))
    setOpen(false)
  }

  const handleInput = (e) => {
    setText(e.target.value)
    console.log(text);


  }
  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Nandan Raghu</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab!</p>
          </div>
        </div>
        <div className="icon">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Eos, quae ut. Excepturi, facere molestias ex provident deleniti
              laborum error odit eos fugiat, deserunt tempore
              eveniet corporis? Laudantium non rem doloremque.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">

          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Eos, quae ut. Excepturi, facere molestias ex provident deleniti
              laborum error odit eos fugiat, deserunt tempore
              eveniet corporis? Laudantium non rem doloremque.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Eos, quae ut. Excepturi, facere molestias ex provident deleniti
              laborum error odit eos fugiat, deserunt tempore
              eveniet corporis? Laudantium non rem doloremque.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message-own">
          <div className="texts">
            <img src="data:image/jpeg;base64,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" alt="" />

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing
              iaium non rem doloremque.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing
              elit. Eos, quae ut. Excepturi, facere molestias ex provident deleniti
              laborum error odit eos fugiat, deserunt tempore
              eveniet corporis? Laudantium non rem doloremque.</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={end}></div>
      </div>
     
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder='Type a message....' value={text} onChange={handleInput} />
        <div className="emoji">
          <img src="./emoji.png" onClick={() => (setOpen((pre) => (!pre)))} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmogi} />

          </div>
          <button className='send-button'><SendIcon/></button>
        </div>
      </div>
    </div>
  )
}
