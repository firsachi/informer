import {urlRest} from './ConfigAPI.js';

async function getDepartment(deparmentId) {
    const urlName = `findDepartment/${deparmentId}`;
    let department = await $.getJSON(urlRest + urlName);
    return department;
};

export {getDepartment};