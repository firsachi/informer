import {urlRest} from './ConfigAPI.js';
/**
* Returns the array list company
* @return {Objects} array company
*/
async function getcompanyList() {
    const urlName = 'loadCompanies';
    let list = await $.getJSON(urlRest + urlName);
    return list;
};

async function getCompany(companyId){
    const urlName = `findCompany/${companyId}`
    let company = await $.getJSON(urlRest + urlName);
    return company;
};

export {getcompanyList, getCompany};