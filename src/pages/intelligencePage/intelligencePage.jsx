import React from "react"
import intl from 'react-intl-universal'
import { withRouter } from "react-router-dom";
import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bannar/thumb_digitalentertainment.png'
import img1 from '../../static/images/img_1.jpg'
import img2 from '../../static/images/img_2.png'
import img3 from '../../static/images/img_3.png'
import './intelligencePage.less'
class intelligencePage extends React.Component{
    render(){
        return(
            <div id="intelligencePage">
                {/* title */}
                <div className="grounpPageTitle">
                {intl.get('editor.item.headerTitleT')}
                </div>
                  {/* 图片 */}
                <div className="grounpPageImg">
                    <img src={thumb1} alt=""/>
                    <div>
                    
                    </div>
                </div> 
                {/* 中心 */}
                {/* <div className="intelligencePageCenter">
                    {/* <div className="firstCenter">
                        <h3> {intl.get('editor.item.second_1')}</h3>
                        <span>{intl.get('editor.item.second_2')}</span><br/>
                        <span>{intl.get('editor.item.second_1')}</span>
                    </div> */}
                    {/* <div className="secondCenter">
                            <img src="" alt=""/>
                    </div> */}
                    {/* <div className="thirdCenter">
                       <div>{intl.get('editor.item.second_1')}</div>
                    </div> */}
              
                {/* 中下     */}
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
                                <h2> 	Hologon image摄影工作室</h2>
                             
                                <span className="spanLeft">
                                Hologon image摄影工作室：Hologon image摄影工作室由数位技艺高超的摄影师组成，每一位摄影师都拥有丰富的艺术摄影经验和商业摄影经验，摄影师和文案、编辑相互配合，能够充分满足客户在艺术摄影与商业摄影上的一切需求。

                          </span><span className="spanRight"></span>
                            </div>
                            <div>
                                <h2> 	飞鸟Tabi</h2>
                      
                                <span className="spanLeft">飞鸟Tabi：飞鸟Tabi是以分享海外见闻、旅游心得的一档网络节目。通过bilibili、抖音、Youtube等各大流量网络平台，以诙谐有趣的方式展示客户产品的优秀之处，将我们的企业文化和专业素养充分溶于视频之中，让每一位客户都能更好的认识我们、了解我们、信任我们。</span><span className="spanRight">

                                </span>
                                
                            </div>
                            <div>
                                <span className="bottomSpanLoca"></span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 图片· */}
                <div className="intelligenceImg">
                    <div className="imgTitle">
                    ピックアップ
                    </div>
                    <div className="imgS">
                        <div>
                            <img src={img1} alt=""/>
                        </div>
                        <div>
                        <img src={img2} alt=""/>
                        </div>
                        <div>
                        <img src={img3} alt=""/>
                        </div>
                    </div>
                </div>
                {/* 模块 */}
                <div className="model_q">
                    <div className="model_div">
                        <div>
                            <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                        <div>
                        <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                        <div>
                        <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                        <div>
                        <div className="titles">{intl.get('editor.item.second_5')}</div><br/>
                            <span>{intl.get('editor.item.second_6')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_7')}</span><br/>
                            <span>{intl.get('editor.item.second_8')}</span>
                        </div>
                    </div>
                    <div className="divs">
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                        <div>{intl.get('editor.item.second_9')}</div>
                    </div>
                </div>
                <IndexPageBottom/>

            </div>
        )
    }
}
Object.assign(intelligencePage.prototype, {
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
  export default withRouter(intelligencePage)