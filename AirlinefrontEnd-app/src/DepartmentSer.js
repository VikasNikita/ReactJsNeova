import axios from "axios";

const Base_Url = "http://localhost:8080";

export const getDepartmentsList = () => {
  return axios.get(Base_Url + "/dept/getAll");
};

export const getDepartmentById = (deptId) => {
  return axios.get(Base_Url + "/dept/get/", +deptId);
};
