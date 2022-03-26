import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

const Forecast = () => {
  const [city, setCity] = useState('');
  const [data, setData] = useState('');
  const submit = async () => {
  	try {
      setData('');
      const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
          "x-rapidapi-key": "40da0fbf92mshfe7a448a5fbb967p17796ejsn5fe22c938fc1"
        }
      });
      const data = await response.json();
      if (data.error && data.error.message) {
        throw new Error(data.error.message);
      } else {
        setData(data);
      }
  	} catch (e) {
  		alert(e.message);
  	}
  };

	return (
    <section style={{margin: 'auto'}}>
      <h3>Get forecast by location</h3>
      <TextField
        label="City"
        onChange={(e) => setCity(e.target.value)}
        variant="outlined" />
      <Button
        disabled={!city}
        style={{display: 'block', marginTop: 20, marginBottom: 20}}
        variant="contained"
        onClick={submit}
      >
        submit
      </Button>
      {data && (
        <section className="table" style={{verticalAlign: 'middle'}}>
          <div>{data.location.name}, {data.location.region}, {data.location.country}</div>
          <div>{data.current.temp_c} &#8451;</div>
          <div><img src={`https:${data.current.condition.icon}`} alt="wheater icon" /></div>
        </section>
      )}
    </section>
  );
};

export default Forecast;

