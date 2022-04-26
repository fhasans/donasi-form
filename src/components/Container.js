import React, { useState } from 'react'
import './Container.css';
import backgroundimg from '../assets/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

function Container(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [donasi, setDonasi] = useState();
    const format = "@gmail.com" && "@googlemail.com"
    const [formatted, setFormattedInput] = useState("");
    
    const handleInput = e => {
        const val = e.target.value;        
        const rupiah = (number)=>{
            return `Rp. ${number.replace(/,/g,"").replace(/[^0-9]/g,"").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
          }
        //   console.log(getDec);

        //   const normalize = getDec[0] && getDec[0].replace(/[^0-9]/g, "");
        const formatted = rupiah(val).toString();
        setFormattedInput(formatted);
        // console.log("normalize: ", normalize);
        // console.log("formatted:  ", formatted);
    }

    // console.log(quote)
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
                            onChange={text => setEmail(text.target.value)}
                            // id="outlined-basic" label="Outlined" variant="outlined"
                            error={
                                !email
                                ?
                                true
                                :
                                email.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)
                                ?
                                false
                                :
                                true
                                
                            }
                            id="outlined-error-helper-text"
                            label="Email"
                            // defaultValue="Hello World"
                            helperText={!email ? "Email tidak boleh kosong!" : email.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/) ? null : "Format email salah dan hanya menerima gmail" }
                            // onChange={}
                            style={{ width: '75%', margin: 13 }}
                        />
                            <TextField

                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={text => setPassword(text.target.value)}
                                error={!password ? true : false}
                                // id="outlined-error-helper-text"
                                // label="Error"
                                // defaultValue="Hello World"
                                helperText={!password ? "Password tidak boleh kosong!" : null}
                                // onChange={}
                                style={{ width: '75%', margin: 13 }}
                            />

                    <TextField
                        id="outlined-basic"
                        label="Donasi"
                        variant="outlined"
                        type='text'
                        error={!donasi ? true : false}
                        onChange={handleInput}
                        value={formatted}
                        helperText={!donasi ? "Input Donasi tidak boleh kosong!" : null}
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