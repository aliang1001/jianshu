import { fromJS } from 'immutable';
import s3 from '../../../../assets/img/banner-s-3-7123fd94750759acf7eca05b871e9d17.png'
import s4 from '../../../../assets/img/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png'
import s5 from '../../../../assets/img/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
import s6 from '../../../../assets/img/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
import s7 from '../../../../assets/img/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
import * as constants from './constants'
const defaultState = fromJS({
  topicList : [],
  articleList : [],
  articlePage:1,
  showScroll:true,
  recommendList:[{
    id:1,
    imgUrl:s3,
  },{
    id:2,
    imgUrl: s4,
  },{
    id:3,
    imgUrl:s5,
  },{
    id:4,
    imgUrl: s6,
  },{
    id:5,
    imgUrl: s7,
  }]
});

const changeHomeData = (state,action)=>{
  return  state.merge({
    topicList : fromJS(action.topicList),
    articleList : fromJS(action.articleList),
  })
}

const addArticleList = (state,action)=>{
  return  state.merge({
    'articleList' : state.get('articleList').concat(fromJS(action.list)),
    'articlePage' : action.nextPage
  })
}
export default (state = defaultState,action)=>{
  switch(action.type){
    case constants.CHANGE_HOME_DATA :
      return  changeHomeData(state,action)
    case constants.Add_ARTICLE_LIST:
      return  addArticleList(state,action)
    case constants.TOGGLE_TOPSHOW:
     return state.set('showScroll',action.show)   
      default:
        return state;
  }
}