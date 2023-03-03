import styles from './Register.module.css'
import TextField from '@mui/material/TextField'


export function Register(){
    return (
        <div>
            <br /><br />
        <TextField id="outlined-basic" label="Outlined" variant="outlined"></TextField>
        <TextField id="filled-basic" label="Filled" variant="filled"></TextField>
        <TextField id="standard-basic" label="Standard" variant="standard"></TextField>


        
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />



        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />




        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />



        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />


        </div>              

)}