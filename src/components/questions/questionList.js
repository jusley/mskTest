import React,{ Component } from 'react'
import QuestionDetails from './questionDetails'
import {Link} from 'react-router-dom'

const QuestionList = ({questions}) =>{
    return(
        <div>
            {questions && questions.map(question =>{
                return(
                    <Link to={'/question/'+ question.id}>
                        <QuestionDetails question={question} key={question.id}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default QuestionList