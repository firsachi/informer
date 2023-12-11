import { coreUl } from "./template/ul.js";
import { coreLiMenu } from "./template/li.js";
import { coreLink } from "./template/link.js";
import { departmentEventListener } from "./template/DepartmentEventListener.js";

const paramMenuVerticalNested = {
    style: ["menu", "vertical", "nested"]
};

let paramLink = {
    companyId: "",
    url: "#",
    linkText: "",
    departmentId: ''
};

function menuVerticalNested(company) {
    let mainUl = coreUl(paramMenuVerticalNested);
    paramLink.companyId = company.id;
    let departments = company.departments;
    $.each(departments, function(index, department){
        paramLink.linkText = department.name;
        paramLink.departmentId = department.id;
        let liItem = coreLiMenu();
        liItem.append(linkItemMenu(paramLink));
        mainUl.append(liItem);
    });
    return mainUl;
};

function linkItemMenu (linkParametr) {
    let link = coreLink(linkParametr);
    link.setAttribute("data-department", linkParametr.departmentId);
    link.setAttribute("data-comapny", linkParametr.companyId);
    return departmentEventListener(link);
    //return link;
};

export {menuVerticalNested};