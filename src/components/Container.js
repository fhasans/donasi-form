import React, {useState}from 'react'
import './Container.css';
import backgroundimg from '../assets/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'


function Container() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [donasi, setDonasi] = useState();
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("donasi : ", donasi);
    return (
        <div className='main-container index'>
            <div className='box box1 flx'>
                <div className='title'>
                    <h2 style={{ color: 'black', fontWeight: '400', marginLeft: '8%', marginTop: '5%' }}>Mari Donasi</h2>
                </div>
                <div className='input'>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={text => setEmail(text.target.value)}
                        // id="outlined-basic" label="Outlined" variant="outlined"
                        // error
                        // id="outlined-error-helper-text"
                        // label="Error"
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
                        // onChange={}
                        style={{ width: '75%', margin: 13 }}
                    />
                    <TextField

                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        onChange={text => setPassword(text.target.value)}
                        
                        // error
                        // id="outlined-error-helper-text"
                        // label="Error"
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
                        // onChange={}
                        style={{ width: '75%', margin: 13 }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Donasi"
                        variant="outlined"
                        type='number'
                        onChange={text => setDonasi(text.target.value)}
                        // error
                        // id="outlined-error-helper-text"
                        // label="Error"
                        // defaultValue="Hello World"
                        // helperText="Incorrect entry."
                        // onChange={}
                        style={{ width: '75%', margin: 13 }}
                    />
                    <Button variant="contained" style={{ width: '75%', height: '16%', margin: 13 }}>Submit</Button>
                </div>
                <div className='quotes'>
                    <div className='qts'>
                        <h4>Quotes of the day:</h4>
                        <p className='qtsText'>"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"</p>
                    </div>

                </div>
            </div>
            <div className='box box2'>
                <img src={backgroundimg} />
            </div>
        </div>
    )
}

export default Container