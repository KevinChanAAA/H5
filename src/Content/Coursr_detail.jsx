import React from 'react';


export default class Course_detail extends React.Component{
    render(){
        return(
            <div className="background " >
                 <img className="course_detail_head" src={require('/Users/kevin/gym/src/Photos/Coursr_detail1.png')}></img><br></br>
              
              
                <div className="course_detail_info">
                    <li>
                        <h3 className="course_detail_yellow" >$1099.88</h3>
                    </li>
                    <li>
                        <h3 className="course_detail_text">充满热情的激烈运动，跟随动感音乐一起燃烧体内脂肪，拥有让人羡慕的肌肉线条</h3>
                    </li>
                    <div className="course_detail_info_icon_border">
                        <li>
                        <img className="course_detail_info_icon" src={require('/Users/kevin/gym/src/icon/ic-上课时间.png')}></img>
                        <span className="course_detail_info_time">上课时间 : 每周五、周六晚上19:00-22:00</span>
                        </li>
                        <li>
                        <img className="course_detail_info_icon" src={require('/Users/kevin/gym/src/icon/ic-课时.png')}></img>
                        <span className="course_detail_info_time">课时 : 共12课时</span>
                        </li>
                    </div>
                    
                </div>
                <div className="course_detail_descript">
                    <li style={{padding:'8px'}}>
                        <span className="course_detail_descript_icon"></span>
                        <span className="course_detail_descript_title">课程介绍</span>
                    </li>
                    <li>
                        <h3 className="course_detail_text">CXWORX® 课程锻炼的是身体核心肌肉群，为您提供拥有强健体格所需的重要锻炼内容。强健的核心肌肉群会让您做任何事都很出色，从日常生活到您最喜欢的运动——是拥有完美生活的必有力量。</h3>
                    </li>
                    <li>
                        <img className="course_detail_descript_photo" src={require('/Users/kevin/gym/src/Photos/Coursr_detail2.png')}></img>
                    </li>
                    <li>
                        <h3 className="course_detail_text">CXWORX 课程的所有动作都有多个选择。因此，虽然有难度，但是完全可以在自己的健身水平基础上做到完美训练。在30分钟的训练课程中，教练会指导您采用正确地方法来使用弹力绳和杠铃片，以及完成仰卧起坐和支撑等负重练习。您也会得到髋部、臀部和下背部肌肉的锻炼。</h3>
                    </li>

                </div>
                <div className="bottom">
                    <li className="course_detail_buy">
                        <span className="course_detail_yellow">
                            在线咨询
                        </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <span className="course_detail_yellow">
                             立即购买    
                        </span>
                    </li>
                   
                </div>
                
                   
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


