import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bottomImg/bg_ci.jpg'
import thumb2 from '../../static/images/bannar/thumb_digitalentertainment.png'
import thumb3 from '../../static/images/bannar/thumb_other.png'
import './introducePage.less'
class introducePage extends React.Component{
    render(){
        return(
            <div id="introducePage">
            
                 <div className="grounpPageTitle">
                 {intl.get('editor.item.headerTitleTh')}
                 </div>
                 {/* 图片 */}
                 <div className="grounpPageImg">
                    <img src={thumb1} alt=""/>
                    {/* <div>{intl.get('editor.item.headerTitleO')}</div> */}
                </div> 
                {/* 内容 */}
                <div className="intelligenceCenter">
                    <div className="wrap">
                        <div className="leftI">
                          
                        </div>
                        <div className="rightI">
                            <div className="fistR">
                                <h2> 	广告业务</h2>


                                <span className="spanLeft">我们拥有专业的策划以及拍摄、剪辑团队，以客户的需求为出发点，量身定制符合客户需要与他国国情的产品，从互联网、实体等多方面入手，实现客户商品的最大曝光度。</span><span className="spanRight"></span>
                            </div>
                            <div>
                                <h2> 	情报支援</h2>
                             
                                <span className="spanLeft">
                                情报支援：本社将以客户项目至今为止的数据为蓝本，辅以自己的数据库作为支援，协助客户构建更加健康的项目模型。
                          </span><span className="spanRight"></span>
                            </div>
                            <div>
                                <h2> 	项目运营支援</h2>
                                <span className="spanLeft">本社以经验丰富的顾问为本，为客户从项目立案到项目实现等运营过程，提供专业化的支援和帮助，协助客户少走弯路，完成项目的“从无到有”。
                               </span><span className="spanRight">

                                </span>
                                
                            </div>
                            <div>
                                <span className="bottomSpanLoca"></span>
                            </div>
                        </div>
                    </div>
                </div>
              
                    
                   

                    {/* <br/><span>{intl.get('editor.item.third_2')}</span> */}
        

                {/* 图片 */}
                <div className="introducePageImg">
                    <div>
                        <img src={thumb1} alt=""/>
                        <h3>{intl.get('editor.item.third_3')}</h3>
                    </div>
                    <div>
                        <img src={thumb2} alt=""/>
                        <h3>{intl.get('editor.item.third_3')}</h3>
                    </div>
                </div>
                <div className="introducePageImg">
                    <div>
                        <img src={thumb3} alt=""/>
                        <h3>{intl.get('editor.item.third_3')}</h3>
                    </div>
                    <div>
                        <img src={thumb1} alt=""/>
                        <h3>{intl.get('editor.item.third_3')}</h3>
                    </div>
                </div>
                <div className="xian">
                {intl.get('editor.item.third_4')}
                </div>
                {/* tupian3 */}
                <div className="threeTmg">
                    <div>
                        <img src={thumb1} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb2} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb3} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb1} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb2} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb3} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb1} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb2} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                    <div>
                        <img src={thumb3} alt=""/>
                        <h2>{intl.get('editor.item.third_5')}</h2>
                        <h2>{intl.get('editor.item.third_6')}</h2>
                        <h2>{intl.get('editor.item.third_7')}</h2>
                        <h2>{intl.get('editor.item.third_8')}</h2>
                        <h2>{intl.get('editor.item.third_9')}</h2>
                    </div>
                </div>
                <div className="xians">
                <h2>{intl.get('editor.item.third_10')}</h2>
                </div>
                {/* kuang */}
                <div className="kuangIntroduce">
                    <div>
                        <h2>{intl.get('editor.item.third_11')}</h2>
                        <h2>{intl.get('editor.item.third_12')}</h2>
                        <h2>{intl.get('editor.item.third_13')}</h2>
                        <h2>{intl.get('editor.item.third_14')}</h2>
                    </div>
                    <div>
                        <h2>{intl.get('editor.item.third_11')}</h2>
                        <h2>{intl.get('editor.item.third_12')}</h2>
                        <h2>{intl.get('editor.item.third_13')}</h2>
                        <h2>{intl.get('editor.item.third_14')}</h2>
                    </div>
                    <div>
                        <h2>{intl.get('editor.item.third_11')}</h2>
                        <h2>{intl.get('editor.item.third_12')}</h2>
                        <h2>{intl.get('editor.item.third_13')}</h2>
                        <h2>{intl.get('editor.item.third_14')}</h2>
                    </div>
                </div>
                {/* biaoti */}
                <div className="sbiaoti">
                ※ © Io-Interactive A/S. All rights reserved.<br/>
                HITMAN: SNIPER © 2014, 2016 IO INTERACTIVE A/S. PUBLISHED BY SQUARE ENIX LTD.
                </div>
                 <IndexPageBottom/>
            </div>
        )
    }
}

Object.assign(introducePage.prototype, {
    componentDidMount() {
      let { location } = this.props
      let ps = this.parseQueryString(location.search)
      let currentLocale = ps.language || 'zh-CN'
      intl.init({
        currentLocale: currentLocale,
        commonLocaleDataUrls: {
          'zh': false,
          'en': false
        },
        locales: {
          [currentLocale]: require(`./../../locales/${currentLocale}`).default
        }
      }).then(() => {
        this.setState({ initDone: true })
      })
    },
    handleLanguage() {
      let { location } = this.props
      let ps = this.parseQueryString(location.search)
      if (ps.language === 'en-US') {
          this.props.history.push('?language=zh-CN')
      } else if (ps.language === 'zh-CN') {
          this.props.history.push('?language=en-US')
      } else {
          this.props.history.push('?language=en-US')
      }
      
      window.location.reload()
    },
    parseQueryString(url) {
      var params = {};
      var arr = url.split("?");
      if (arr.length <= 1) {
        return params;
      }
      arr = arr[1].split("&");
      for (var i = 0, l = arr.length; i < l; i++) {
        var a = arr[i].split("=");
        params[a[0]] = a[1];
      }
      return params;
    }
   })
  export default withRouter(introducePage)