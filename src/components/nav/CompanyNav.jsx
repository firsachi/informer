import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Container, Box, CssBaseline } from "@mui/material";
import CompanyList from '../../api/CompanyFile';
import DepartmentDrawer from './department/DepartmentDrawer';
import CompanyButtonNav from './CompanyButtonNav';

export default function CompanyNav() {

    const drawerWidth = 360;
    const [comapanyButton, setCompanyButton] = useState([]);
    const [setctCompany, setSelectCompany] = useState(null);
    const [departmentDrawer, setDepartmentDrawer] = useState([]);

    const handleCompanySelect = (selectCompany) => {
        showDepartmentDrawer(selectCompany);
    };

    const showDepartmentDrawer = (company) => {
        const departmentDrawer = (
            <DepartmentDrawer
                drawerWidth={drawerWidth}
                companyDepartment={company}
            />
        );
        setDepartmentDrawer(departmentDrawer);
    };

    const loadCompany = async () => {
        try {
            const companyData = await CompanyList();
            const firstCompany = companyData[0];
            setSelectCompany(firstCompany);
            setCompanyButton(
                companyData.map((company) => (
                    <CompanyButtonNav
                        key={company.id}
                        onCompanySelect={handleCompanySelect}
                        company={company}
                        selected={true}
                    />
                ))
            );
            showDepartmentDrawer(firstCompany);
        } catch (error) {
            console.error('Error fetching employee data:', error.message);
        }
    };

    useEffect(() => {
        loadCompany();
    },[]);

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
                            {comapanyButton}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            {departmentDrawer}
        </Box>
    );

};