export const signIn = (creds)=>{
    return(dispatch,getState,{getFirebase}) =>{
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        ).then(()=>{
            dispatch({type: 'LOGGED_IN'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_FAILED',err})
        })
    }
}

//signing out the user

export const signOut =() =>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type:'SIGNED_OUT'})
        })
    }
}

// register

export const register = (newUser) =>{
    return(dispatch,getState,{getFirebase,getFirestore}) =>{
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then((resp)=>{
            return firestore.collection('users').doc(resp.user.uid).set({
                firstName: newUser.firstname,
                lastName: newUser.lastname,
                email: newUser.email,
                password: newUser.password

            })
        }).then(()=>{
            dispatch({type: 'REGISTERED'})
        }).catch((err)=>{
            dispatch({type:'REGISTRATION_FAILED',err})
        })

    }
}