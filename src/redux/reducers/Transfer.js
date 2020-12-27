const initialState = {
    data: [],
    loading: false,
  };
  
  const Transfer = (state = initialState, action = {}) => {
    switch (action.type) {
      case 'TRANSFER_REQUEST':
        return { ...state, loading: true };
  
      case 'TRANSFER_SUCCESS':
        return { ...state, loading: false, data: action.payload };
      
      case 'TRANSFER_ERROR':
        return { ...state, loading: false, isLogin: false, data:[], error: action.payload };

      case 'GETBYID_REQUEST':
        return {
          ...state, loading: true,
        };
      case 'GETBYID_SUCCESS':
        return {
          ...state, loading: false, isLogin: true, data: action.payload
        };
      case 'GETBYID_ERROR':
        return {
          ...state, loading: false, isLogin: false, data:[], error: action.payload
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
        case 'POSTTRANSFER_REQUEST':
        return {
          ...state, loading: true,
        };
      case 'POSTTRANSFER_SUCCESS':
        return {
          ...state, loading: false, isLogin: true, data: action.payload
        };
      case 'POSTTRANSFER_ERROR':
        return {
          ...state, loading: false, isLogin: false, data:[], error: action.payload
        };
  
      default:
        return state
    }
    
  };
  export default Transfer;
  