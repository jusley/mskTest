import React from 'react'
import {Link} from 'react-router-dom'
import Signin from './signIn'
import SignOut from './signOut'
import CreateQuestion from '../questions/createQuestion'
import { connect } from 'react-redux'
import{ signOut } from '../../store/actions/loginAction'

const Navbar = (props) =>{
    const {auth} = props
    const links = auth.uid?<SignOut/> :<Signin/>
    return(
        <nav>
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/register'>Register</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/createQuestion'>createQuestion</Link></li>
                    {links}
                </ul>
            </div>
        </nav>
    )
}
const mapStateToProps = (state)=>{
    console.log(state);
    return{
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps) (Navbar)