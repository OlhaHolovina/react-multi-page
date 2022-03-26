import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Contacts = () => {
  const [phone, setPhone] = useState('');

  const submit = () => {
    alert(`We will call you back by phone ${phone} shortly!`);
  };

  return (
    <section style={{margin: 'auto'}}>
      <h3>Conatact me</h3>
      <TextField
        label="phone"
        onChange={(e) => setPhone(e.target.value)}
        variant="outlined" />
      <Button
        disabled={!phone}
        style={{display: 'block', marginTop: 20, marginBottom: 20}}
        variant="contained"
        onClick={submit}
      >
        contact me
      </Button>
    </section>
  );

};

export default Contacts;

