import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import './Nav.css';

function Nav() {
  const [value, setValue] = React.useState('photos');
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue === 'albums' ? '/albums' : '/');
  };

  return (
    <Box className="nav-container" sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab className="tabs" value="photos" label="Photos" />
        <Tab className="tabs" value="albums" label="Albums" />
      </Tabs>
    </Box>
  );
}

export default Nav;
