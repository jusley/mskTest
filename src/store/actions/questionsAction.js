import firebase from 'firebase/app'

export const create_Question = (question) =>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        firebase.firestore().collection('questions').add({
        ...question
        }).then(()=>{dispatch({type:'CREATE_QUESTION',question});
    
    }).catch((err)=>{
        dispatch({type:'CREATE_QUESTION_ERROR',err})
    })
        
    }
}