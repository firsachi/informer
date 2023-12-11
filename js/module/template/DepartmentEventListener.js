import { getDepartment } from '../api/DepartmentApi.js';

function departmentEventListener(link) {
    link.addEventListener("click", async function(){
        const departmentId = this.getAttribute("data-department");
        const companyId = this.getAttribute("data-comapny");
        const department = await getDepartment(departmentId);
        fillHeaderEmployee(department);
        const listEmployee = await getListEmployee(companyId, departmentId);
        renderEmployeeItem(listEmployee);
        $('div#menuDepartment > a.callout.alert-callout-border').removeClass("primary");
        this.classList.add("primary");
    });
    return link;
};

export{ departmentEventListener };