import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import AddBoxIcon from '@mui/icons-material/AddBox'
import AutoGraphIcon from '@mui/icons-material/AutoGraph'
import {Box, Paper} from "@mui/material"
import { useNavigate, Outlet } from 'react-router-dom';



export default function Navbar() {
    const [select, setSelect] = React.useState('dashboard')
    const navigate = useNavigate()

    const handleChange = (event, newValue) => {
        setSelect(newValue)
        switch(newValue) {
            case 'dashboard':
                navigate("/");
                break;
            case 'addBudget':
                navigate("/budget");
                break;
            case 'data':
                navigate("/data");
                break;
            case 'me':
                navigate("/userInfo");
                break;
            default:
                navigate("/");
                break;
        }
    }

    return (
        <Box display="flex" flexDirection='column' justifyContent="flex-end" height="100vh" alignItems="center">
            <Box flexGrow={1} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                <Outlet />
            </Box>
            <Paper sx={{ width: '75%', margin: 'auto', mt: 2 }} elevation={3}>
                <BottomNavigation value={select} onChange={handleChange} sx={{ width: '100%' }}>
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
                        to="/budget"
                    />
                    <BottomNavigationAction
                        label="Data"
                        value="data"
                        icon={<AutoGraphIcon />}
                        to="/data"
                    />
                    <BottomNavigationAction
                        label="Me"
                        value="me"
                        icon={<SentimentSatisfiedAltIcon />}
                        to="/user"
                    />
                </BottomNavigation>
            </Paper>
        </Box>

    );
}
