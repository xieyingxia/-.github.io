import React from "react"

import IndexPageBottom from '../indexPage/indexPageBottom'
import thumb1 from '../../static/images/bottomImg/bg_ci.jpg'
import './newPage.less'
export default class newPage extends React.Component {
    render() {
        return (
            <div id="newPage">
                {/* biaoti */}
                <div className="grounpPageTitle">
                    ニュース
                 </div>
                {/* 图片 */}
                <div className="grounpPageImg">
                    <img src={thumb1} alt="" />
                </div>
                <div className="titlw">

                </div>
                <div className="intelligenceCenter">
                    <div className="wrap">
                        <div className="leftI">

                        </div>
                        <div className="rightI">
                            <div className="fistR">
                                <h2> 	 	留学生支援业务</h2>


                                <span className="spanLeft">我们以互联网为平台，从筹划到实施，为每一个留学生的留学计划提供全方位的服务和帮助。在每一个留学生的留学生活中，我们不仅能够帮助他们打破语言、科目的隔阂，让每个留学生都能够有挑战自己梦想中的院校的机会，而且可以协助他们解决在国外生活中面临的问题，使每一个留学生都能有一段意义非凡的留学经历。</span><span className="spanRight"></span>
                            </div>
                            <div>

                            <div>
                                <h2> 	Kotatsu</h2>

                                <span className="spanLeft">Kotatsu是一款面向海内外语言学习者所开发的网站。本产品旨在以每个客户的需求为准，匹配最符合客户要求的商户，从而解决客户的“文书难写，文书难改，文书难练”的三难问题，让写外语文书资料不再是留学生的弱项。</span><span className="spanRight">

                                </span>

                            </div>
                                <h2> 	EJU在线模考</h2>

                                <span className="spanLeft">
                                EJU在线模考是一个由日本留学试验官方，语言学校，在日留学生教育机构等第一、第二方机构以外的第三方所提供的公平。一方面，它不仅能够真正做到在世界各地同时举办正式的日本留学实验模拟考，而且可以为在日留学生提供海量题库来进行反复的自我检验以更好的明确自身成绩现在所处的定位；另一方面，它通过与各大在日留学生教育机构合作，也为在日留学生的日本留学试验的备考搭建起一个高专业高效率高质量的服务平台。其中，我们的宗旨是，帮助每个使用我们平台的留学生找出自己现阶段的学习的不足以及在所有留学生之中自己成绩所在的梯队，针对性的给出合理有效的建议，使得每个使用我们平台的留学生都能够查漏补缺，不仅能在日本留学试验中获得一个理想的成绩，而且通过帮助在日留学生进行难以反复训练的培训，例如训练面试等，使每一位在日留学生都能在日后的校内考以及毕业就业时都能有一个好的成绩。（注：本平台题目来源：除了本平台内部出题人员开发以外，也由与本平台合作的机构所提供，充分保障本平台题目的客观性、实时性、准确性与可信度。）

                          </span><span className="spanRight"></span>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <IndexPageBottom />
            </div>
        )
    }
}
