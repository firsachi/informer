import React, { useEffect } from 'react';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function DepartmentItem({ companyId, department }) {

    const handleButtonClick = () => {

        const departmentSelect = {
            companyId: companyId,
            departmentId: department.id
        };

        //props.onDepartmentSelec(departmentSelect);

    };

    return (
        <ListItem key={department.id} disablePadding>
            <ListItemButton onClick={handleButtonClick}>
                <ListItemText primary={department.name} />
            </ListItemButton>
        </ListItem>
    );
};