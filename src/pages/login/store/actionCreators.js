import axios from 'axios';
import * as constents from './constents';
const changeLogin = ()=>({
  type : constents.CHANGE_LOGIN,
  value : true
})

export const logout = () =>({
  type: constents.LOGOUT,
  value : false
})

export const login = (accout,password)=>{
  return (dispatch) =>{
    axios.get('/api/login.json?account='+accout+'&password'+password).then(res=>{
      const result = res.data.data
      if(result){
        dispatch(changeLogin())
      } else {
        console.log('登陆失败')
      }
    })
  }
}