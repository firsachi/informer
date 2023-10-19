import { getListEmployee } from './api/EmployeeApi.js';
import { renderEmployeeItem, fillHeaderEmployee } from "./employee.js";
import { getDepartment } from "./api/DepartmentApi.js";
import { getCompany } from "./api/CompanyAPI.js";
import { renderDepartment } from "./department.js"; 

function fragmentNavigationItem({id, name}) {
    let link = document.createElement('a');
    let linkText = document.createTextNode(name);
    link.appendChild(linkText);
    link.setAttribute('data-company', id);
    link.addEventListener("click", async function(){
        const companyId = this.getAttribute("data-company");
        const company = await getCompany(companyId);
        const department = renderDepartment(company);
        fillHeaderEmployee(department);
        const listEmployee = await getListEmployee(companyId, department.id);
        renderEmployeeItem(listEmployee);
        $('nav#navigation  > div.top-bar-left > ul > li > a').removeClass("nav-primary");
        this.classList.add("nav-primary");
    });
    let li = document.createElement('li');
    li.appendChild(link);
    return li;
};

function fragmentDepartmentItem({id, name}, companyId) {
    let link = document.createElement('a');
    let linkText = document.createTextNode(name);
    link.appendChild(linkText);
    link.setAttribute('data-department', id);
    link.setAttribute('data-comapny', companyId);
    link.classList.add("callout", "alert-callout-border");
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

function fragmentPeopleItem(employee) {

    const peopleItem = `<div class="row add-people-section">
                            <div class="small-12 medium-9 columns about-people">
                                <div class="about-people-avatar"><img class="avatar-image" src="avka.jpg" alt="Kishore Kumar"></div>
                                    <div class="about-people-author">
                                        <p class="author-name"><strong>Посада: </strong>${employee.namePosition}</p>
                                        <p class="author-name"><strong>П І Б</strong> ${employee.surname} ${employee.name} ${employee.patronymic}</p>
                                        <p class="author-name"><strong>Електрона скринька: </strong><a href="mailto:${employee.name}<${employee.email}>">${employee.email}</a></p>
                                    </div>
                                </div>
                                <div class="small-12 medium-3 columns add-friend">
                                    <div class="add-friend-action">
                                        <span class="label primary">Телефон: ${employee.phoneNumber}</span>
                                        <span class="label secondary"> Кімната: ${employee.room}</span>
                                    </div>
                                </div>
                        </div>`;

    return peopleItem;
}

export { fragmentNavigationItem, fragmentDepartmentItem, fragmentPeopleItem };