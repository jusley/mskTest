import React,{ Component } from 'react'
import { connect } from 'react-redux'
import { register } from '../../store/actions/loginAction'

class Register extends Component{
    state = {
        firstName: '',
        lastName: '',
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
        this.props.register(this.state)
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text">Sign in</h5>
                    <div className="input-field">
                        <input type="text" id="firstname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="text" id="lastname" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink" id="submit">REGISTER</button>
                    </div>
                </form>
            </div>
        )
    }

}
const mapStateToProps=(state)=>{
    return{
       auth: state.firebase.auth,
       authError: state.auth.authError
    }
}
const mapDispatchToProps= (dispatch)=>{
   return{
       register: (newUser) => dispatch(register(newUser))
   } 
}
export default connect(mapStateToProps,mapDispatchToProps) (Register);