import React,{Component} from 'react'
import Header from './common/header/index'
import store from './common/store/index'
import { Provider } from 'react-redux'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route path='/' exact component={Home} ></Route> 
        <Route path='/login' exact component={Login} ></Route> 
        <Route path='/detail:id' exact  component={Detail} ></Route>
        <Route path='/write' exact  component={Write} ></Route>
      </BrowserRouter>
      </Provider>
    )
  }
}
export default App