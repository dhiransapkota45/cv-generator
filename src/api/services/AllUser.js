import {
  alluserFailure,
  alluserPending,
  alluserSuccess,
} from "../../redux/actions/userActionCreator";
import instance from "../instance";

export const fetchalluser = () => {
  return async (dispatch) => {
    dispatch(alluserPending());
    try {
      const response = await instance.get("");
      dispatch(alluserSuccess(response.data));
    } catch (error) {
      console.log(error);
      dispatch(alluserFailure());
    }
  };
};
