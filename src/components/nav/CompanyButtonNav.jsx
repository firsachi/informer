import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

export default function CompanyButtonNav({company, onCompanySelect, selected}) {

    const handleButtonClick = () => {
        onCompanySelect(company);
    };

    return(
        <Button 
            color="inherit" 
            style={{ fontSize: '18px' }} 
            onClick={handleButtonClick}
            selected={selected}
        >
            {company.name}
        </Button>
    );
};