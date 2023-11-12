import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import UiSamples from '../UiSamples/UiSamples';
import Development from '../Development/Development';
import AndroidTeam from '../AndroidTeam/AndroidTeam';
import "./SampleProjects.css"



export default function SampleProjects() {
      
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="UI UX" value="1" />
              <Tab label="Development" value="2" />
              <Tab label="Android" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><UiSamples /></TabPanel>
          <TabPanel value="2"><Development /></TabPanel>
          <TabPanel value="3"><AndroidTeam /></TabPanel>
        </TabContext>
      </Box>
    );
}
