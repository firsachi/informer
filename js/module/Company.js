import {getcompanyList} from './api/CompanyAPI.js';
import {fragmentNavigationItem} from './fragment.js';

async function navigation(companyId) {
    const companyList = await getcompanyList();
    renderNavigationCompnay(companyList);
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

export { navigation };