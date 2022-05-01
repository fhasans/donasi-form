import React from 'react'
import TextField from '@mui/material/TextField';
import {Form, Field} from 'react-final-form'
import { Button } from '@mui/material';

const TextFieldEmail = ({ input, meta, ...rest }) => (

    <TextField
      {...input}
      {...rest}
      onChange={(value) => input.onChange(value)}
      errorMessage={meta.touched && meta.error}
      helperText = 'field harus diisi'
    />
  )
  const error = value =>  {
                                value
                                ?
                                false
                                :
                                email.match(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)
                                ?
                                false
                                :
                                true
  }
  const required = value => (value ? undefined : 'Field input tidak boleh kosong')

  const onSubmit = value => {
    alert(JSON.stringify(value));
  }

const FinalForm = () => (
<Form 
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
            <div>
                <h2>Form</h2>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="email"
                        component={TextFieldEmail}
                        validate={required}
                        helperText={"field harus diisi"}
                    />
                    <Button type='submit'>ubmit</Button>
                </form>
                    
            </div>
    )}
    />
);

export default FinalForm