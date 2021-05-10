import authReducer from './authReducer'
import questionReducer from './questionReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const combinedReducers = combineReducers({
    auth : authReducer,
    question : questionReducer,
    firestore : firestoreReducer,
    firebase : firebaseReducer
});

export default combinedReducers