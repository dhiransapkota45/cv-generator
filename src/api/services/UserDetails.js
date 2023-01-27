import instance from "../instance";

export const userDetails = async (setUserdata, userid) => {
  const response = await instance.get(`/${userid}`);
  console.log(response);
  setUserdata(response.data);
};
