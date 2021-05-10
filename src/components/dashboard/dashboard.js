import React,{ Component } from 'react'
import QuestionList from '../questions/questionList'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import {compose} from 'redux'

class Dashboard extends Component{
    render(){
        const {questions} = this.props
        return(
            <div>
                <h5>welcome, :*</h5>
                <div>
                    <QuestionList questions ={questions}/>
                    {console.log("hey")}
                </div>
            </div>
            );
    }
}

const mapStateToProps = (state) =>{
    return{
        questions: state.firestore.ordered.questions
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'questions'}
    ])
)(Dashboard)