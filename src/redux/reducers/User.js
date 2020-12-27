const initialState = {
  data: [],
  loading: false,
};

const User = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'USER_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'USER_SUCCESS':
      return {
        ...state,
        loading: false,
        isLogin: true,
        data: action.payload
      };
    case 'USER_ERROR':
      return {
        ...state,
        loading: false,
        isLogin: false,
        data:[],
        error: action.payload
      };
      case 'USERALL_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'USERALL_SUCCESS':
        return {
          ...state,
          loading: false,
          isLogin: true,
          data: action.payload
        };
      case 'USERALL_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          error: action.payload
        };
        case 'SEARCHNAME_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'SEARCHNAME_SUCCESS':
        return {
          ...state,
          loading: false,
          isLogin: true,
          data: action.payload
        };
      case 'SEARCHNAME_ERROR':
        return {
          ...state,
          loading: false,
          isLogin: false,
          data:[],
          error: action.payload
        };
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
      case 'GETHISTORY_REQUEST':
          return {
            ...state, loading: true,
          };
        case 'GETHISTORY_SUCCESS':
          return {
            ...state, loading: false, isLogin: true, data: action.payload
          };
          case 'GETHISTORY_ERROR':
          return {
            ...state, loading: false, isLogin: false, data:[], error: action.payload
          };
    default:
      return state
  }
};
export default User;
