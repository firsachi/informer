import {navigation} from './module/Company.js';
import {renderDepartment} from  './module/department.js';
import {fillEmployee} from './module/employee.js';

let activeCompany = {
    id: 0,
    name: "",
    departments: []
}

let activeDepartment = {
    id: 0,
    name: "",
    phone: "",
};

$(async function( ) {
    const activeCompany = await navigation(0);
    const activeDepartment = renderDepartment(activeCompany);
    fillEmployee(activeCompany.id, activeDepartment);
});