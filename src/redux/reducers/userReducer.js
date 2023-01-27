const initialstate = {
  loading: false,
  alluser: [],
};

const userReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "alluser/pending":
      return { ...state, loading: true };
    case "alluser/success":
      return { ...state, loading: false, alluser: action.payload };
    case "alluser/failure":
      return { ...state, loading: false, alluser: [] };
    default:
      return { ...state };
  }
};

export default userReducer;
