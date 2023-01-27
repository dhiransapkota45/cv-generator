import instance from "../../api/instance";

export const alluserPending = () => {
  return {
    type: "alluser/pending",
  };
};

export const alluserSuccess = (response) => {
  return {
    type: "alluser/success",
    payload: response,
  };
};

export const alluserFailure = () => {
  return {
    type: "alluser/failure",
  };
};
