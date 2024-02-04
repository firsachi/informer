import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Box, CssBaseline } from "@mui/material";
import CompanyList from '../../api/CompanyFile';

import DepartmentDrawer from './department/DepartmentDrawer';
import CompanyButtonNav from './CompanyButtonNav';

export default function CompanyNav() {

    const drawerWidth = 360;

    const [companyItem, setCompanyItem] = useState([]);
    const [departmentDrawer, setDepartmentDrawer] = useState([]);
    const [selectCompany, setSelectCompany] = useState({});


    const handleCompanySelect = (selectCompany) => {
        setSelectCompany(selectCompany);
        console.log(selectCompany);
        setDepartmentDrawer(
            <DepartmentDrawer
                drawerWidth={drawerWidth}
                companyDepartment={selectCompany}
            />
        );
    };

    useEffect(() => {
        const loadCompany = async () => {
            try {
                const companyData = await CompanyList();
                setSelectCompany(companyData[0]);
                setCompanyItem(
                    companyData.map((company) => (
                        <CompanyButtonNav
                            key={company.id}
                            onCompanySelect={handleCompanySelect}
                            company={company}
                            selected={selectCompany.id === company.id}
                        />
                    ))
                );

                setDepartmentDrawer(
                    <DepartmentDrawer
                        drawerWidth={drawerWidth}
                        companyDepartment={companyData[0]}
                    />
                );
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