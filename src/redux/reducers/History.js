const initialState = {
    data: [],
    loading: false,
  };
  
  const History = (state = initialState, action = {}) => {
    switch (action.type) {
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
  export default History;
  