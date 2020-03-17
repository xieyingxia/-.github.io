import React from "react"
import IndexPageList from '../indexPage/indexPageList'
import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bottomImg/bg_ci.jpg'
import './newPage.less'
export default class newPage extends React.Component{
    render(){
        return(
            <div id="newPage">
                {/* biaoti */}
                 <div className="grounpPageTitle">
                 ニュース
                 </div>
                 {/* 图片 */}
                 <div className="grounpPageImg">
                    <img src={thumb1} alt=""/>
                </div> 
                <div className="titlw">

                </div>
                <IndexPageList/>
                <IndexPageBottom/>
            </div>
        )
    }
}
