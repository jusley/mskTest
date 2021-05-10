const initState = {
    questions:[
        {id:'1', name:'1+1', answer:'11'},
        {id:'2', name:'2*2',answer:'4'},
        {id:'3', name:'-1', answer:'3'}
    ]
}
const questionReducer = (state = initState,action) => {
    switch(action.type){
        case 'CREATE_QUESTION':
            console.log('question created',action.question)
            return state;
        case 'CREATE_QUESTION_ERROR':
            console.log('question not created',action.err)
            return state;
        default:
            return state
    }
}
export default questionReducer