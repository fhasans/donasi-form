import React, { useState } from 'react'
import './Container.css';
import backgroundimg from '../assets/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function Container(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [rawInput, setRawInput] = useState([])
    const [donasi, setDonasi] = useState();
    const format = "@gmail.com" && "@googlemail.com"

    // console.log(quote)
    console.log("email : ", email);
    console.log("password : ", password);
    console.log("donasi : ", donasi);

    const handleInput = text => {
        const val = text.target.value
        const lastTypedChar = val[val.length - 1];
        setRawInput(...rawInput, lastTypedChar)
    }

    const formatted = (numb) => {
        const format = numb.toString().split('').reverse().join('');
        const convert = format.match(/\d{1,3}/g);
        const rupiah = 'Rp ' + convert.join('.').split('').reverse().join('')
        setDonasi(rupiah)
        return rupiah
    }
    return (
        <div className='main-container index'>
            <div className='box box1 flx'>
                <div className='title'>
                    <h2 style={{ color: 'black', fontWeight: '400', marginLeft: '8%', marginTop: '5%' }}>Mari Donasi</h2>
                </div>
                <div className='input'>
                    {
                        email?.includes(format) ? <TextField
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
                        /> : <TextField
                            onChange={text => setEmail(text.target.value)}
                            // id="outlined-basic" label="Outlined" variant="outlined"
                            error
                            id="outlined-error-helper-text"
                            label="Email"
                            // defaultValue="Hello World"
                            helperText={!email ? "Email tidak boleh kosong!" : "Format email salah dan hanya menerima gmail"}
                            // onChange={}
                            style={{ width: '75%', margin: 13 }}
                        />}
                    {
                        !password
                            ?
                            <TextField

                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={text => setPassword(text.target.value)}
                                error
                                // id="outlined-error-helper-text"
                                // label="Error"
                                // defaultValue="Hello World"
                                helperText={!password ? "Password tidak boleh kosong!" : null}
                                // onChange={}
                                style={{ width: '75%', margin: 13 }}
                            />
                            :
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
                                // helperText={!password ? "Password tidak boleh kosong!" : null}
                                // onChange={}
                                style={{ width: '75%', margin: 13 }}
                            />
                    }

                    <TextField
                        id="outlined-basic"
                        label="Donasi"
                        variant="outlined"
                        type='text'
                        onChange={handleInput}
                        value={formatted}
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
                        <p className='qtsText'>{props.text}</p>
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