import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import NavApp from './Nav';
import DepartmntDrawer from './department/DepartmentDrawer';
import Employees from './employee/Employees';

const drawerWidth = 240;

export default function Layout(props) {

    //const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <NavApp 
                drawerWidth={drawerWidth}
                handleDrawerToggle={handleDrawerToggle}
            />
            <DepartmntDrawer 
                drawerWidth={drawerWidth} 
                handleDrawerToggle={handleDrawerToggle} 
                mobileOpen={mobileOpen}
            />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Employees />
            </Box>
        </Box>
    );

};