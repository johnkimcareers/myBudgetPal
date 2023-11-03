import * as React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import DashboardIcon from '@mui/icons-material/Dashboard'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import AddBoxIcon from '@mui/icons-material/AddBox'
import {Box, Paper} from "@mui/material"
import { useNavigate, Outlet } from 'react-router-dom'
import { styled } from '@mui/system'


const MainContainer = styled(Box)({
    height: '100vh',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
})

const ContentContainer = styled(Box)({
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
})

const NavigationContainer = styled(Paper)({
    width: '75%',
    margin: 'auto',
    marginTop: 2,
    position: 'fixed',
    bottom: 0,
    zIndex: 1000
})



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
        <MainContainer>
            <ContentContainer>
                <Outlet />
            </ContentContainer>
            <NavigationContainer elevation={3}>
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
                        label="Me"
                        value="me"
                        icon={<SentimentSatisfiedAltIcon />}
                        to="/user"
                    />
                </BottomNavigation>
            </NavigationContainer>
        </MainContainer>
    )
}
