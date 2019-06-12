import React,{ PureComponent } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { LoginWrapper,LoginBox,Input ,Button} from "./style";
import {actionCreators} from './store'
import { getIn } from "immutable";
class Login extends PureComponent{
  constructor(props){
    super(props);
    this.account = React.createRef();
    this.password = React.createRef();
  }
  render(){
      if(!this.props.loginState){
        return (
          <LoginWrapper>
            <LoginBox>
            <Input placeholder="账号" ref={this.account} />
            <Input placeholder="密码" type="password" ref={this.password}/>
              <Button onClick={()=>this.props.login(this.account,this.password)}>登入</Button>
            </LoginBox>
            </LoginWrapper>
         )
      } else {
        return <Redirect to="/" />
      }
  }
}  
const mapState = (state)=>({
  loginState : state.getIn(['login','login'])
})
const mapDispatch = (dispatch)=>({
  login(accountElement,passwordElem){
    const account = accountElement.current;
    const password = passwordElem.current.value
    dispatch(actionCreators.login(account,password))
  }
})

export default connect(mapState,mapDispatch)(Login)