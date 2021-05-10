import React,{ Component } from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'  
import Navbar from './components/layout/navbar'
import Dashboard from './components/dashboard/dashboard'
import login from './components/auth/login'
import register from './components/auth/register'
import createQuestion from './components/questions/createQuestion'
import Question from './components/questions/question'
class App extends Component{
  render(){
    return (
    <BrowserRouter>
      <div>
        <Navbar/>
        <Switch>
          <Route path='/question/:id' component={Question} />
          <Route path='/login' component={login}/>
          <Route path='/register' component={register}/>
          <Route path='/createQuestion' component={createQuestion}/>
          <Route path='/' component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
    );
  } 
}

export default App;
