const initState = {
    authError:null
}
const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGGED_IN':
            console.log('success')
            return{
                ...state,
                authError: null
            }
        case 'LOGIN_FAILED':
            console.log('fail')
            return{
                ...state,
                authError: 'login failed'
            }

        case 'REGISTERED':
            console.log('success')
            return{
                ...state,
                authError: null
            }
                
    
        case 'REGISTRATION_FAILED':
            console.log('fail')
            return{
                ...state,
                authError: 'registration failed'
            }
        case 'SIGNED_OUT':
            console.log('failed sign out')
            return state;
        default:
            return state
    }
}
export default authReducer