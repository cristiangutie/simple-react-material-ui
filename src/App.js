import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { ButtonGroup, Checkbox, FormControlLabel, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save'
import DeleteIcon from '@mui/icons-material/Delete'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE688B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true)
  return (
    <FormControlLabel
      control={<Checkbox
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />} 
      label="Checkbox"
    />


  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonStyled />
        <TextField
          variant="filled"
          color="error"
          type="email"
          label="Email"
          placeholder="test@test.com" 
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            size="large"
            style={{
              fontSize: 24
            }} 
            variant="contained" 
            color="primary">
            Save
          </Button>
          <Button
            startIcon={<DeleteIcon />}
            size="large"
            style={{
              fontSize: 24
            }} 
            variant="contained" 
            color="error">
            Discard
          </Button>
        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
