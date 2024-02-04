import axios from "axios";

const baseURL = "http://localhost:8080/informer/api/";

async function EmployeeList({companyId, departmentId}) {
    try {
        const loadEmployeesURL = `${baseURL}loadEmployes/${companyId}/${departmentId}`;
        const response = await axios.get(loadEmployeesURL);
    
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
      }
};

export {EmployeeList};