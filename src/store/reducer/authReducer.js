const initialState = {
    isAuthenticated: false,
    user: null,
  };
  
export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}