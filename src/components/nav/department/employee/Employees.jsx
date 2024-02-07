import React, { useEffect, useState } from 'react';
import { Box, Container, Divider, Grid, Toolbar, Typography } from '@mui/material';
import EmployeeItem from './EmployeeItem';
import { EmployeeList } from '../../../../api/EmployeeList';

export default function Employees({ selectedDepartment }) {

    const [employeeItems, setEmployeeItems] = useState([]);

    useEffect(() => {
        const loadEmployees = async () => {
            try {
                if (selectedDepartment) {
                    const prop = {
                        companyId: selectedDepartment.companyId,
                        departmentId: selectedDepartment.departmentId
                    };
                    const employeeData = await EmployeeList(prop);

                    setEmployeeItems(
                        employeeData.map((employee, index) => (
                            <EmployeeItem key={index} employee={employee} />
                        ))
                    );
                } else {
                    setEmployeeItems([
                        <Typography key="no-department" variant="subtitle1" component="div">
                            Будь ласка, оберіть відділ для відображення співробітників.
                        </Typography>
                    ]);
                }
            } catch (error) {
                console.error('Error fetching employee data:', error.message);
            }
        };

        if (selectedDepartment) {
            loadEmployees();
        }
    }, [selectedDepartment]);

    return (
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
        >
            <Toolbar />
            <Container>
                <Typography variant='h4' align='center'>
                    {selectedDepartment && selectedDepartment.departmentName}
                </Typography>
            </Container>
            <Toolbar />
            <Grid container spacing={2}>
                {employeeItems}
            </Grid>
        </Box>
    );
};
