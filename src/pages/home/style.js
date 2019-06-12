import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width:960px;
  margin: 0 auto;
  overflow:hidden;
`;
export const HomeLeft = styled.div`
  float : left;
  marign-left : 15px;
  padding-top : 30px;
  width : 625px;
  .banner-img{
    width: 625px;
    height:270px;
  }
`
export const HomeRight = styled.div`
  width : 280px;
  float : right;
`
export const TopicWrapper = styled.div`
  overflow : hidden;
  padding : 20px 0 10px 0;
  margin-right:-18px;
  border-bottom:1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  margin-bottom : 18px;
  margin-right:18px;
  float : left;
  height: 32px;
  line-height : 32px;
  padding-right:10px;
  background : #f7f7f7;
  font-size : 14px;
  color : #000;
  border : 1px solid #dcdcdc;
  border-radius : 4px;
  .topic-pic {
    float : left;
    width : 32px;
    height : 32px;
    margin-right:10px;
  }
`

export const ListItem = styled.div`
  overflow : hidden;
  padding:20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display : block;
    width :125px;
    height:100px;
    float : right;
    border-radius:10px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float : left;
  .title{
    margin:0px;
    font-size:18px;
    font-weight:bold;
    color : #333;
  }
  .desc{
    line-height:24px;
    font-size:13px;
    color :#999;
  }
`
export const RecommendWrapper = styled.div`
  margin:30px 0 15px 0;
  width:280px;
`

export const RecommendItem = styled.div`
  width : 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size:contain;
  margin-bottom:6px;
  `
export const WriterWrapper = styled.div`
  width:278px;
  height : 300px;
`
export const WritePoter = styled.div`
  
`
export const WriteQRcode = styled.div`
  padding:10px 22px;
  box-sizing:border-box;
  height: 80px;
  width : 278px;
  margin-bottom:30px;
  border: 1px solid #f0f0f0;
  border-radius:6px;
  background-color:#fff;
  .QR{
    height:60px;
    width:60px;
    vertical-align: middle;
  }
`
export const WriteInfo = styled.div`
  vertical-align:middle;
  display:inline-block;
  margin-left:7px;
`
export const Writetitle = styled.div`
 font-size:15px;
 color : #333;
`
export const WriteP = styled.div`
  margin-top:4px;
  color:#999;
  font-size:13px;
`
export const LoadMore = styled.div`
  width:100%;
  height:40px;
  line-height:40px;
  text-align:center;
  background:#a5a5a5;
  border-radius:20px;
  color:#fff;
  margin:30px 0;
  cursor:pointer;
`
export const BackTop = styled.div`
  font-size : 14px;
  position : fixed;
  right:100px;
  bottom : 100px;
  line-height : 60px;
  text-align : center;
  border : 1px solid #ccc;
`