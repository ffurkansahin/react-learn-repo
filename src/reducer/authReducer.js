export default function authReducer(state, action){
    switch(action.type){
        case('LOG_OUT'):
            return{
                ...state,
                user:action.payload
            }
        case('LOGIN'):
            return{
                ...state,
                user:action.payload
            }
    }
}