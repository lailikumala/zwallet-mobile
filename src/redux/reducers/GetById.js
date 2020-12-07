const initialState = {
  data: [],
  loading: false,
};

const GetById = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GETBYID_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'GETBYID_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
      case 'GETBYID_ERROR':
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
export default GetById;
