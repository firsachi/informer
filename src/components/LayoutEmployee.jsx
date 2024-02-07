import React from 'react';
import { Stack } from '@mui/material';
import CompanyNav from './nav/CompanyNav';

export default function LayoutEmployee(props) {

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