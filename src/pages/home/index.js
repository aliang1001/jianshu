import React,{ Component } from "react";
import List from './component/List'
import Topic from './component/Topic'
import Writer from './component/Writer'
import Recommend from './component/Recommend'
import { connect } from 'react-redux'
import { actioncreators } from './component/store' 
import { HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop,
 } from './style'
class Home extends Component{
  handleScrollTop = ()=>{
    window.scrollTo(0,0)
  }
  render(){
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4668/77e4329017294a607d78e74789afc6a22f4a6ebe.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
          <Topic/>
          <List/>
        </HomeLeft>
        <HomeRight>
            <Recommend/>
            <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null}
      </HomeWrapper>
    )
  }
  componentDidMount(){
    this.props.changeHomeData()
    this.bindEvents()
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScroll)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScroll)  
  }
}
const mapState = (state)=>({
  showScroll : state.getIn(['home','showScroll'])
})
const mapDispatch = (dispatch) =>({
  changeHomeData(){
    const action = actioncreators.getHomeInfo()
    dispatch(action)
  },
  changeScroll(){
    if(document.documentElement.scrollTop > 250){
      dispatch(actioncreators.toggleTopShow(true))
    } else {
      dispatch(actioncreators.toggleTopShow(false))
    }
  }
})
// 执行异步操作，一般都是放在componnentDidMount生命周期函数里边，但是作为一个Ui组件，逻辑最好是要存放在actioncreators.js中。
export default connect(mapState,mapDispatch)(Home)