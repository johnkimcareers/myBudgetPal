import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { Box } from "@mui/material";


export default function Navbar() {
    const [select, setSelect] = React.useState('dashboard');

    const handleChange = (event, newValue) => {
        setSelect(newValue);
    };

    return (
        <Box display="flex" justifyContent="center" height = "100vh" alignItems="flex-end">
            <BottomNavigation sx={{ width: '75%' }} value={select} onChange={handleChange}>
                <BottomNavigationAction
                    label="Dashboard"
                    value="dashboard"
                    icon={<DashboardIcon />}
                    to="/dashboard"
                />
                <BottomNavigationAction
                    label="Add Budget"
                    value="addBudget"
                    icon={<AddBoxIcon />}
                />
                <BottomNavigationAction
                    label="Data"
                    value="data"
                    icon={<AutoGraphIcon />}
                />
                <BottomNavigationAction
                    label="Me"
                    value="me"
                    icon={<SentimentSatisfiedAltIcon />} />
            </BottomNavigation>
        </Box>
    );
}
