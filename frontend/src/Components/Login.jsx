import React, { useState } from 'react'
import './Login.css'
import 'material-react-toastify/dist/ReactToastify.css';
import { toast } from 'material-react-toastify';

export default function Login() {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    })

    const handleImage = (e) => {    // to  access the image for the directory
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const hanbleLogin = (e) => {
        e.preventDefault();
        toast.warn('hi')
    }

    const hanbleRegester = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        console.log(form);
        
        const { userName,email,password } = Object.fromEntries(form);
        console.log(userName,email,password);

    }
    return (
        <div className='login'>
            <div className="item">
                <h2>Welcome </h2>
                <form onSubmit={hanbleLogin}>
                    <input type="text" placeholder='Enter the name'  name='userName'/>
                    <input type="password" placeholder='Enter the password' name='password' />
                    <button>Login</button>
                </form>
            </div>
            <div className="seperator"></div>
            <div className="item">
                <h2>Create an Account</h2>
                <form onSubmit={hanbleRegester}  target='_blank'>
                    <label htmlFor="file">
                        <img src={avatar.url || "./avatar.png"} alt="" />
                        upload image</label>
                    <input type="text" placeholder='Enter the name' name='userName' />
                    <input type="email" placeholder='Enter the email' name='email' />
                    <input type="password" placeholder='Enter the password' name='password' />
                    {/*handle the image from the input*/}
                    <input type="file" id='file' style={{ display: "none" }} onChange={handleImage} />
                    <button>Sign up</button>

                </form>
            </div>
        </div>
    )
}
