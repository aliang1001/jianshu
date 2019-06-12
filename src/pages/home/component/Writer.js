import React,{ PureComponent } from "react";
import {WriterWrapper, WriteQRcode,Writetitle,WriteP,WriteInfo,WritePoter} from '../style'
import QRcode from '../../../assets/img/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
class Write extends PureComponent{
  render(){
    return (
      <div>
      <WriterWrapper>
        <WriteQRcode>
          <img alt='' src={QRcode}  className="Writer QR"  />
          <WriteInfo>
          <Writetitle>下载简书手机App</Writetitle>
          <WriteP>随时随地发现和创造内容</WriteP>
          </WriteInfo>
        </WriteQRcode>
        <WritePoter></WritePoter>
      </WriterWrapper>
      </div>
    )
  }
}
export default Write