import React,{ Component } from 'react'
import {connect} from 'react-redux'
import {create_Question} from '../../store/actions/questionsAction'

class createQuestion extends Component{
    state = {
        Name: '',
        answer: ''
        
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
        this.props.create_Question(this.state)
    }
    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text">create question</h5>
                    <div className="input-field">
                        <input type="text" id="Name" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <input type="text" id="answer" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink" id="submit">CREATE</button>
                    </div>
                </form>
            </div>
        )
    }

}
const mapDispatchToProps=(dispatch)=>{
    return{
        create_Question:(question)=> dispatch(create_Question(question))
    }
}
export default connect(null,mapDispatchToProps)(createQuestion)