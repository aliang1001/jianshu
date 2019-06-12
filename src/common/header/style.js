import styled from 'styled-components';
import logoPic from '../../statics/logo.png'

export const SearchInfoList = styled.div`
  overflow : hidden;
`
export const SearchInfoItem = styled.a`
display: block;
float: left;
line-height: 20px;
padding: 0 5px;
margin-right: 10px;
margin-bottom: 15px;
font-size: 12px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
`

export const SearchInfoSwitch = styled.span`
  float : right;
  font-size:13px;
  cursor : pointer;
  .spin {
    font-size:12px;
    margin-right:2px;
  }
`
export const SearchInfoTitle = styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size: 14px;
color: #969696;
`
export const SearchInfo = styled.div`
position: absolute;
left: 0;
top: 56px;
width: 240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
background: #fff;
`
export const HeaderWrapper = styled.div`
  z-index:1;
  height: 56px;
  border-bottom:1px solid #f0f0f0
  position : relative
  box-sizing:border-box;
`
export const Logo = styled.div`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`
export const Nav = styled.div` 
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box
`
export const NavItem = styled.div`
  line-height:56px;
  padding: 0 15px;
  font-size:17px;
  color : #333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696
  }
  &.active{
    color: #ea6f5a
  }
  &.App:hover{
    background:#f5f5f5;
  }
`;
export const SearchWrapper = styled.div`
position:relative;
 float:left;
  .zoom{
    position : absolute;
    bottom:5px;
    right:5px;
    line-height:30px;
    width:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background : #777;
      color:#fff;
    }
  }
`
export const NavSearch = styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  margin-top:9px;
  margin-left:20px;
  padding : 0 30px 0 20px;
  border:none;
  border-radius:19px;
  background:#eee;
  box-sizing:border-box;
  font-size:14px;
  color:#666;
  outline :none;
  &::placeholder{
    color:#999
  }
  &.focused {
    width:240px;
  }
  &.slide-enter{
    width:160px;
    transition: all .2s ease-out;
   }
   &.slide-enter-active{
    width:240px;
   }
   &.slide-exit{
    transition: all .2s ease-out;
   }
   &.slide-exit-active{
     wieth:160px;
   }
`;
export const Addition = styled.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`
export const Button = styled.div`
  float : right;
  margin:9px 20px 0 0;
  padding:0 20px;
  line-height:38px;
  border-radius:19px;
  border: 1px solid #ec6149;
  &.reg {
    color:#ec6149
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`