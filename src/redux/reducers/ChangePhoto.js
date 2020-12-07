const initialState = {
  data: [],
  loading: false,
};

const ChangePhoto = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CHANGEPHOTO_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'CHANGEPHOTO_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
      case 'CHANGEPHOTO_ERROR':
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
export default ChangePhoto;
