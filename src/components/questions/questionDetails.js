import React from 'react'

const QuestionDetails = ({question}) =>{
    return(
        <div className="card z-depth-0 questionDetails">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{question.id}</span>
                <p className="grey-text">{question.Name}</p>
                <p className="grey-text">{question.answer}</p>
                <p>---------------------------------------------------</p>
            </div>
        </div>
    )
}
export default QuestionDetails