import axios from 'axios';
import Globals from '../Global';

class DepartmentService {

  base_url = Globals.BASE_URL_DEPARTMENT;
  user_token = localStorage.getItem("token");
  user_created = localStorage.getItem("userLoginSAML");
  user_modificated = localStorage.getItem("userLoginSAML");

  getDepartmentList = async () => {
    return await axios
       .get(this.base_url, { headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };

  insertDepartment = async (depSelected) => {
    depSelected.userCreated = this.user_created;
    return await axios
       .post(this.base_url, depSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };

  updateDepartment = async (depSelected) => {
    depSelected.userModificated = this.user_modificated;
    return await axios
       .put(this.base_url + '/' +depSelected.id, depSelected,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };

  deleteDepartment = async (id) => {
    return await axios
       .delete(this.base_url + '/' +id ,{ headers: { Authorization: `Bearer ${this.user_token}` } })
      .then(response => {
        return response.data;
      })
      .catch(function (error) {
           console.log(error);
      });
  };
}

export default DepartmentService;