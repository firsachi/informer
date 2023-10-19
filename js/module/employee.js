import { getListEmployee } from './api/EmployeeApi.js';
import { fragmentPeopleItem} from './fragment.js';

async function fillEmployee(companyId, activeDepartment) {
    let listEmployee = await getListEmployee(companyId, activeDepartment.id);
    fillHeaderEmployee(activeDepartment);
    renderEmployeeItem(listEmployee);
};

export { fillEmployee };

function fillHeaderEmployee({name, phone}) {
    $(".add-people-header .header-title#nameDepartment").text(name);
    $(".add-people-header #numberPhone").text(phone);
}

function renderEmployeeItem (listEmployee){
    $('#infoEmployees > div').remove();
    let employeeItem = [];

    $.each(listEmployee, function (index, employee) {
        employeeItem.push(fragmentPeopleItem(employee));
    });
    $('#infoEmployees').append(employeeItem);
};

export { renderEmployeeItem, fillHeaderEmployee };