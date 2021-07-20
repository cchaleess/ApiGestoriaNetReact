import axios from 'axios';
import Globals from '../Global';

class EmployeeService {

  base_url =  Globals.BASE_URL_EMPLOYEE;
  user_token = localStorage.getItem("token");
  user_created = localStorage.getItem("userLoginSAML");
  user_modificated = localStorage.getItem("userLoginSAML");

  getEmployeeList = async () => {
    debugger;
    return axios
       .get(this.base_url, { headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };

  insertEmployee = async (empSelected) => {
    debugger;
    empSelected.userCreated = this.user_created;
    return axios
       .post(this.base_url, empSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };

  updateEmployee= async (empSelected) => {
    debugger;
    empSelected.userModificated = this.user_modificated;
    return axios
       .put(this.base_url + '/' +empSelected.id, empSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };

  deleteEmployee = async (id) => {
    debugger;
    return axios
       .delete(this.base_url + '/' +id ,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };
}

export default EmployeeService;