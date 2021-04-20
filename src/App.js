import './App.css';
import AppBar from '@material-ui/core/AppBar';
import React, { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Recipelist from './components/recipelist';

function App() {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="one" label="Recipes" />
          <Tab value="two" label="Arvostelut" />
        </Tabs>
      </AppBar>
      {value === 'one' && <Recipelist />}
      {value === 'two' && <div>Huh, olipa herkullinen omenapiirakan resepti.
        Vihdoinkin helppo maidoton resepti ja sai omenasadon käytettyä herkullisesti.</div>}
    </div>
  );
}

export default App;

