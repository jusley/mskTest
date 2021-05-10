import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {signIn} from '../../store/actions/loginAction'

class login extends Component{
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text">Login</h5>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink" id="submit">LOGIN</button>
                    </div>
                </form>
            </div>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
       authError: state.auth.authError
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signIn: (creds) => dispatch(signIn(creds))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(login);