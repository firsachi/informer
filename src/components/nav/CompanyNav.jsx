import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Button, Box, CssBaseline, Drawer, Divider, Typography } from "@mui/material";
import CompanyList from '../../api/CompanyFile';

import DepartmentDrawer from './department/DepartmentDrawer';

export default function CompanyNav() {

    const drawerWidth = 360;

    const [companyItem, setCompanyItem] = useState([]);
    const [departmentDrawer, setDepartmentDrawer] = useState([]);
    //const [employeeCardGrid, setEmployeeCardGrid] = useState([]);

    useEffect(() => {
        const loadCompany = async () => {
            try {
                const companyData = await CompanyList();
                setCompanyItem(
                    companyData.map((company) => (
                        <Button key={company.id} color="inherit" style={{ fontSize: '18px' }} >{company.name}</Button>
                    ))
                );

                setDepartmentDrawer(
                    <DepartmentDrawer drawerWidth={drawerWidth} companyDepartment={companyData[0]} />
                    //<DepartmentList initialDepartmentSelectOption={companyData[0]} />
                );
                /*
                const selectOptionEmployee = {
                    companyId: companyData[0].id,
                    departmentId: companyData[0].departments[0].id,
                }
                setEmployeeCardGrid(
                    <EmployeeGrid selectOptionEmployee={selectOptionEmployee} />
                );
*/
            } catch (error) {
                console.error('Error fetching employee data:', error.message);
            }
        };
        loadCompany();
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
            >
                <Container maxWidth="xl">
                    <Toolbar>
                        <Box>
                            {companyItem}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
           {departmentDrawer}
        </Box>

    );

};