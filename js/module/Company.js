import {getCompanyList} from './api/CompanyAPI.js';
import {fragmentNavigationItem} from './fragment.js';
import { getMenuAccordionVertical } from './MenuAccordionVertical.js';

async function navigation(companyId) {
    const companyList = await getCompanyList();
    renderNavigationCompnay(companyList);
    renderAccordionVreticalMenuCompany(companyList);
    $('nav#navigation  > div.top-bar-left > ul > li > a').first().addClass("nav-primary");
    if ( 0 == companyId) {
        return companyList[0];
    };
};

function renderNavigationCompnay(companyList){
    const navigationItems = [];
    $.each(companyList, function (index, company){
        let liItem = fragmentNavigationItem(company);
        navigationItems.push(liItem);
    });
    $('ul#companies.menu').append(navigationItems);
};

function renderAccordionVreticalMenuCompany(companyList) {
    $('div#offCanvasMenuLeft').append(getMenuAccordionVertical(companyList));
};

export { navigation };