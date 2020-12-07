const initialState = {
  data: [],
  loading: false,
};

const ResetPassword = (state = initialState, action = {}) => {
  switch (action.type) {
      case 'RESETPASSWORD_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'RESETPASSWORD_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
      case 'RESETPASSWORD_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };
    
    default:
      return state
  }
};
export default ResetPassword;
