const initialState = {
  data: [],
  loading: false,
};

const PatchUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'PATCHUSER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'PATCHUSER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
      case 'PATCHUSER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };
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
export default PatchUser;
