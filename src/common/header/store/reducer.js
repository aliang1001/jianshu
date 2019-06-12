import * as constants from './constants'
import { fromJS } from 'immutable';
const defaultState = fromJS({
  mouseIn : false,
  focused : false,
  list : [],
  page : 1,
  totalPage:1
});

export default (state = defaultState,action)=>{
  switch(action.type){
    case constants.SEARCH_FOCUS:
      return state.set('focused',true)
    case constants.SEARCH_BLUR:
      return state.set('focused',false)
    case constants.CHANGE_LIST :
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })
    case constants.MOUSE_ENTER :
      return state.set('mouseIn',true)
    case constants.MOUSE_LEAVE :
      return state.set('mouseIn',false)
    case constants.CHANG_PAGE :
      return state.set('page',action.page)
      default:
        return state;
  }
  // if(action.type == constants.SEARCH_FOCUS){
  //   // immutable对象的set方法，会结合之前immutable对象的值和之前的值，返回一个全新的对象
  //     return state.set('focused',true)  // 修改一个immutable对象中的focused，值为true
  // }
  // if(action.type == constants.SEARCH_BLUR){
  //     return state.set('focused',false)
  // }
  // if(action.type == constants.CHANGE_LIST){
  //   return state.set('list',action.data)
  // } 
  // return state
} //导出的是一个纯函数，给定一个固定的输入，就会有一个固定的输出