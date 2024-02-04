import React, { useState, useEffect } from 'react';
import {  Stack } from '@mui/material';
import CompanyNav from './nav/CompanyNav';

const departmentSelectOption = {
  companyId: 0,
  departmentId: 0,
};

export default function LayoutEmployee(props) {

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [selectedDepartment, setSelectedDepartment] = useState({
    companyId: 1,
    departmentId: 2
  });

  const handleDepartmentSelect = (departmentSelect) => {
    setSelectedDepartment({
      companyId: departmentSelect.companyId,
      departmentId: departmentSelect.departmentId
    });
  };

  return (
    <Stack>
      <CompanyNav />
    </Stack>
  );
};

//<AppNav handleDrawerToggle={handleDrawerToggle} companyName={"Informer - zal"} />
//<CompanyDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} onDepartmentSelect={handleDepartmentSelect} />
// components/pages
//   - reklama
//   - sekta
//     - list
//       - listItem
//          - card header
//          - card content
//          - card actions
// 