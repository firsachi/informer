import { urlRest } from './ConfigAPI.js';

async function getListEmployee (companyId, deparmentId) {
    const urlName = `loadEmployes/${companyId}/${deparmentId}`;
    //let tmp = await $.post(urlRest + 'loadEmployes/', {companyId: companyId, deparmentId: deparmentId});
    let listEmployee = $.getJSON(urlRest + urlName);
    return listEmployee;
};

export {getListEmployee};