import React, { useState } from 'react'
import './Container.css';
import backgroundimg from '../assets/logo.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import { Form, Field } from 'react-final-form';
import Typography from '@mui/material/Typography';

function Container(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [donasi, setDonasi] = useState();
    const [isErrorEmail, setIsErrorEmail] = useState(false);
    const format = "@gmail.com" && "@googlemail.com"
    const [formatted, setFormattedInput] = useState("");

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
    }
    const handleInput = e => {
        const val = e.target.value;
        const rupiah = (number) => {
            return `Rp. ${number.replace(/,/g, "").replace(/[^0-9]/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
        }
        const formatted = rupiah(val).toString();
        setFormattedInput(formatted);
    }
    const emailValidation = () => {
        const regX = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/;
        if (regX.test(email) && !email) {
            setIsErrorEmail(false);
        } else{
            setIsErrorEmail(true);
        }
    };
    const handleOnChange = (e) => {
        setEmail(e.target.value);
        emailValidation(e.target.value)
    };


    // const handleError = !email ? true : email.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/) ? false : true

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
                <center>
                <Form className ={{width: '150%'}}
                    onSubmit={onSubmit}
                    validate={values => {
                        const errors = {}
                        if (!values.email) {
                            errors.email = 'Email Tidak Boleh Kosong'
                        }
                        if (!values.password) {
                            errors.password = 'Password Tidak Boleh Kosong'
                        }
                        if (!values.donasi) {
                            errors.donasi = 'Input Donasi Tidak Boleh Kosong!'
                        } else {
                            console.log("success")
                        }
                        return errors
                    }}
                    render={({ handleSubmit }) => (
                        <form onChange={handleSubmit}>
                            <Field name="email">
                                {({ input, meta }) => (
                                    <TextField
                                    {...input}
                                    value={email}
                                        onChange={handleOnChange}
                                        error={meta.touched && !email ? true : isErrorEmail}
                                        label="Email"
                                        helperText={
                                            !email
                                            ?
                                            null
                                            :
                                            email.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)
                                            ?
                                            null
                                            :
                                            "Format email salah dan hanya menerima gmail"
                                        }
                                        style={{ width: '75%', margin: 13 }}
                                    />
                                    
                                )}
                            </Field>
                            <Field name="password">
                            {({ input, meta }) => (
                            <TextField
                            {...input}
                            value={password}
                                id="outlined-password-input"
                                label="Password"
                                type="password"
                                autoComplete="current-password"
                                onChange={text => setPassword(text.target.value)}
                                error={meta.touched ? true : false}
                                helperText={!password && meta.touched ? "Password tidak boleh kosong!" : null}
                                style={{ width: '75%', margin: 13 }}
                            />
                            )}
                            </Field>
                            <Field name="donasi">
                            {({ input, meta }) => (
                            <TextField
                            {...input}
                                id="outlined-basic"
                                label="Donasi"
                                variant="outlined"
                                type='text'
                                error={!donasi && meta.touched ? true : false}
                                onChange={handleInput}
                                value={formatted}
                                helperText={!donasi && meta.touched ? "Input Donasi tidak boleh kosong!" : null}
                                style={{ width: '75%', margin: 13 }}
                            />
                            )}
                            </Field>
                            
                            <Button onClick={handleSubmit} variant="contained" style={{ width: '75%', height: '16%', margin: 13 }}>Submit</Button>
                        </form>
                    )}
                />
                </center>
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