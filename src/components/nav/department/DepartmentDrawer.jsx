import React, { useEffect, useState } from 'react';
import { Divider, Drawer, List, Toolbar, Typography } from '@mui/material';
import DepartmentItem from './DepartmentItem';
import Employees from './employee/Employees';

export default function DepartmentDrawer({ drawerWidth, companyDepartment }) {

    const [selectedDepartment, setSelectedDepartment] = useState({
        companyId: companyDepartment.id,
        departmentId: companyDepartment.departments[0].id,
        departmentName: companyDepartment.departments[0].name,
    });

    const [employees, setEmployees] = useState();

    const handleDepartmentSelect = (departmentSelect) => {
        setSelectedDepartment(departmentSelect);
    };

    useEffect(() => {
        if (companyDepartment) {
            const initDepartment = {
                companyId: companyDepartment.id,
                departmentId: companyDepartment.departments[0].id,
                departmentName: companyDepartment.departments[0].name,
            };
            setSelectedDepartment(initDepartment);
        }
    }, [companyDepartment]);

    useEffect(() => {
        if (selectedDepartment) {
            setEmployees(<Employees selectedDepartment={selectedDepartment} />);
        }
    }, [selectedDepartment]);

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
                        <DepartmentItem
                            key={department.id}
                            companyId={companyDepartment.id}
                            department={department}
                            onDepartmentSelect={handleDepartmentSelect}
                            selected={selectedDepartment.departmentId === department.id}
                        />
                    ))}
                </List>
            </Drawer>
            {employees}
        </>
    );
};