import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Products from "./Products"
import faker from 'faker';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',marginTop:"70px" }}>
      <TabContext value={value}>
        <TabPanel> Browse our categories</TabPanel>
        <Box sx={{ borderBottom: 1, borderColor: 'divider',marginBottom:"0 50px" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="food" value="1" />
            <Tab label="electornics" value="2" />
            <Tab label="console" value="3" />
            <Tab label="phones" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Food</TabPanel>
        <TabPanel value="2">Electronics</TabPanel>
        <TabPanel value="3">Console</TabPanel>
        <TabPanel value="4">Phones</TabPanel>
        <Box sx={{ display: 'grid', gridTemplateRows: 'repeat(3, 1fr)' }}>
 
        {new Array(8).fill(0).map((ele) => (
              <Products
                img={`${faker.image.abstract()}?random=${Math.round(
                  Math.random() * 100
                )}`}
                des={faker.commerce.productDescription()}
                name={faker.commerce.productName()}
              />
            ))}
</Box>
      </TabContext>
    </Box>
  );
}
