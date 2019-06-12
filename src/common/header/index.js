import React,{Component} from 'react'
import { HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from './style.js';
import '../../statics/iconfont/iconfont.css'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux';  //帮助组件跟store建立连接
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import {actionCreators as loginActionCreators} from '../../pages/login/store'

class Headr extends Component{
      getListAres = ()=>{
        const {focused,list,page,mouseIn,totalPage} = this.props
        const pageList = [];
        const newList = list.toJS()
        if(newList.length){
          for(let i = ((page-1) * 10); i < page * 10;i++ ){
            if(newList[i] !== undefined)
              pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
              )
          }
        }
        if(focused||mouseIn){
        return  ( <SearchInfo onMouseEnter={this.props.handleMouseEnter}
                              onMouseLeave={this.props.handleMouseLeave}
                  >
             <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={()=>this.props.handleClickPage(page,totalPage,this.spinIcon)}>
                <i  ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe606;</i>换一批
                </SearchInfoSwitch>
             </SearchInfoTitle>
             <SearchInfoList>
                {pageList}
               </SearchInfoList>
            </SearchInfo>)
        } else {
        return null
        }
      }
    getLogin = ()=>{
      if(this.props.login){
        return <NavItem onClick={this.props.logout} className='right'>退出</NavItem>
      } else {
        return <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
      }
    } 
  render(){
    const {focused} = this.props
    return (
      <HeaderWrapper>
      <Link to="/">
      <Logo />
      </Link>
      <Nav>
      <NavItem className='left active'>首页</NavItem>
      <NavItem className='left App'>下载App</NavItem>
      {this.getLogin()}
      <NavItem className='right'>
      <i className="iconfont">&#xe636;</i>
      </NavItem>
      <SearchWrapper>
      <CSSTransition 
      in={focused}
      timeout={200}
      classNames="slide"
      >
      <NavSearch className={focused ? 'focused': ''} 
      onFocus={()=>this.props.handleInputFocus(this.props.list)}
      onBlur={this.props.handleInputBlur}
      >
      </NavSearch>
      </CSSTransition>
      <i className={focused ? 'focused iconfont zoom': 'iconfont zoom'}>&#xe623;</i>
        {this.getListAres()}
      </SearchWrapper>
      </Nav>
      <Addition>
        <Link to="/write">
        <Button className="writting">
        <i className="iconfont">&#xe615;</i>
        写文章</Button>
        </Link>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
      )
    }
}
const mapStateToProps = (state)=>{
  return {
    focused : state.getIn(['header','focused']),
    // focused : state.get('header').get('focused')
  // focused : state.header.get('focused') state是用js的方法调用header的immutable数据的
  //使用immutable对象的时候需要get('xx')    //引用的是已经整合过的store  
    list : state.getIn(['header','list']),
    page : state.getIn(['header','page']),
    mouseIn : state.getIn(['header','mouseIn']),
    totalPage : state.getIn(['header','totalPage']),
    login: state.getIn(['login','login'])
  }
}
const mapDisPatchtoProps = (dispatch)=>{
  return {
    handleInputFocus(list){
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur())
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave())
    },
    handleClickPage(page,totalPage,spin){
      if(page < totalPage){
        page++
        dispatch(actionCreators.changePage(page))
      } else {
        const page = 1
        dispatch(actionCreators.changePage(page))
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}


export default connect(mapStateToProps,mapDisPatchtoProps)(Headr)


