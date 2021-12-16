import httpClient from "./HttpCommon";

const getAll = () => {
  return httpClient.get("/getAll");
};

const create = (data) => {
  return httpClient.post("/Add", data);
};

const get = (id) => {
  return httpClient.get(`/get/${id}`);
};

const update = (data) => {
  return httpClient.put("/update", data);
};
export default { getAll, create, get, update };
