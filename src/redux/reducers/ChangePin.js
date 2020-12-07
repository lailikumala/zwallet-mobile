const initialState = {
  data: [],
  loading: false,
};

const ChangePin = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGEPIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CHANGEPIN_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
      case 'CHANGEPIN_ERROR':
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
export default ChangePin;
