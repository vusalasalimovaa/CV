import { BASE_URL } from "./api";
import axios from "axios";

export const getAllDatas = async (endPoint) => {
  let res = await axios(BASE_URL + endPoint);
  let data = res.data;
  return data;
};

export const postDatas = async (endPoint, obj) => {
  let res = await axios.post(BASE_URL + endPoint, obj);
  let data = res.data;
  return data;
};

export const getDataById = async (endPoint, id) => {
  let res = await axios(BASE_URL + endPoint + id);
  let data = res.data;
  return data;
};

export const patchById = async (endPoint, id, obj) => {
  let res = await axios.patch(BASE_URL + endPoint + id, obj);
  let data = res.data;
  return data;
};

///////////////////////////////////////////////////

export const deleteById = async (url, id) => {
  let res = await axios.delete(url + "/" + id);
  let data = res.data;
  return data;
};

// export const putById = async (url, id, obj) => {
//   let res = await axios.put(url + "/" + id, obj);
//   let data = res.data;
//   return data;
// };
