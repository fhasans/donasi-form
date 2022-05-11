import React from 'react'
import TextField from '@mui/material/TextField';
import { Form, Field } from 'react-final-form'
import { Button } from '@mui/material';

const required = v => (!v || v === "" ? "Email tidak boleh kosong" : undefined)

const onSubmit = values => {
  alert(JSON.stringify(values));
}

const FinalForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({ handleSubmit }) => (
      <div>
        <h2>Form</h2>
        <form onSubmit={handleSubmit}>
          <Field>
            {({ input, meta, ...rest }) => (
              <TextField
                {...input}
                {...rest}
                onChange={(event, value) => input.onChange(value)}
                errorText={meta.touched ? meta.error : ''}
              />
            )}
          </Field>
          <Button name="submit" type='submit' onClick={handleSubmit}>Submit</Button>
        </form>

      </div>
    )}
  />
);

export default FinalForm