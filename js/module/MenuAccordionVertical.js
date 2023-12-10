import { coreUl } from "./template/ul.js";
import { coreLiMenu } from "./template/li.js";
import { menuVerticalNested } from "./MenuVerticalNested.js";
import { coreLink } from "./template/link.js";

let linkParametr = {
    url: "#",
    linkText: ""
};

const paramMenuAccordionVertical = {
    dataAttribute: "data-accordion-menu",
    style: ["vertical", "menu", "accordion-menu"]
}

function getMenuAccordionVertical(companyList) {
    let mainUl = coreUl(paramMenuAccordionVertical);
    mainUl.setAttribute(paramMenuAccordionVertical.dataAttribute, "");
    $.each(companyList, function (index, company) {
        linkParametr.linkText = company.name;
        let liItem = coreLiMenu();
        liItem.append(coreLink(linkParametr));
        liItem.append(menuVerticalNested(company));
        mainUl.append(liItem);
    });
   return mainUl;
};

export {getMenuAccordionVertical};