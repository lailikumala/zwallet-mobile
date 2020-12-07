const initialState = {
  data: [],
  loading: false,
};

const ChangePhone = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGEPHONE_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CHANGEPHONE_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
      case 'CHANGEPHONE_ERROR':
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
export default ChangePhone;
