import React from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import{ signOut } from '../../store/actions/loginAction'

const SignOut = (props) =>{
    return(
        <nav>
            <div>
                <li><a onClick={props.signOut}>logOut</a></li>
            </div>
        </nav>
    )
}
const mapDispatchToProps = (dispatch)=>{
    return{
        signOut:()=> dispatch(signOut())
    }
}
export default connect(null,mapDispatchToProps)(SignOut)