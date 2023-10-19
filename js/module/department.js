import {fragmentDepartmentItem} from './fragment.js';

function renderDepartment({id, departments}){
    $("#menuDepartment.menu > a").remove();
    let departmentPrimary = $(`div#menuDepartment > a.callout.alert-callout-border.primary`).attr("data-department");
    if (undefined == departmentPrimary) {
        departmentPrimary = departments[0];
    };
    const linkDepartment = [];
    $.each(departments, function(index, department){
        let link = fragmentDepartmentItem(department, id);
        if (department.id == departmentPrimary.id) {
            link.classList.add("primary");
        };
        linkDepartment.push(link);
    });
    $("#menuDepartment.menu").append(linkDepartment);
    return departmentPrimary;
};

export { renderDepartment };