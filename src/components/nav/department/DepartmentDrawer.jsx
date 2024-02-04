import React from 'react';
import { Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import DepartmentItem from './DepartmentItem';
import Employees from './employee/Employees';

export default function DepartmentDrawer({ drawerWidth, companyDepartment }) {

    const selectOptionEmployee = {
        companyId: companyDepartment.id,
        departmentId: companyDepartment.departments[0].id,
        departmentName: companyDepartment.departments[0].name,
    }

    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Toolbar >
                    <Typography>
                        INFORMER
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {companyDepartment.departments.map((department) => (
                        <DepartmentItem key={department.id} companyId={companyDepartment.id} department={department} />
                    ))}
                </List>
            </Drawer>
            <Employees selectedDepartment={selectOptionEmployee} />
        </>
    );
};