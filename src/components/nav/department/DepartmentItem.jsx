import React, {useState} from 'react';
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

export default function DepartmentItem({ companyId, department, onDepartmentSelect, selected }) {

    const handleButtonClick = () => {

        const departmentSelect = {
            companyId: companyId,
            departmentId: department.id,
            departmentName: department.name,
        };

        onDepartmentSelect(departmentSelect);
    };

    return (
        <ListItem key={department.id} disablePadding>
            <ListItemButton onClick={handleButtonClick} selected={selected}>
                <ListItemText primary={department.name} />
            </ListItemButton>
        </ListItem>
    );
};