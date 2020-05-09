import React from 'react';


export default class course extends React.Component{
    render(){
        return(
            <div className="background " >
                <li className="course_title">
                <span  style={{color: '#FFD738'}}>在售课程</span>&nbsp;&nbsp;&nbsp;&nbsp;
                <span  style={{color: ' #FFFFFF'}}> 我的课程</span><br></br>
                <span className="course_icon"></span>
              
               
              
                </li>
               
               
                <div>
                    <div className="home_content_bg">
                        <img className="detail_photo" src={require('/Users/kevin/gym/src/Photos/searching1.png')}></img><br></br>
                        <span className="home_content_title">有氧肌肉健身</span><br></br>
                        <span className="hoem_content_detail">拥有最强大的导师，一对一教学，短周期内即可看到效果…</span><br></br>
                    </div>
                    <div className="home_content_bg">
                        <img className="detail_photo" src={require('/Users/kevin/gym/src/Photos/searching2.png')}></img><br></br>
                        <span className="home_content_title">有氧身体塑形</span><br></br>
                        <span className="hoem_content_detail">拥有最强大的导师，一对一教学，短周期内即可看到效果…</span><br></br>
                    </div>
                </div>
                <div className="bottom">
                    <il>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/首页灰u.png')}></img>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/课程.png')}></img>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/发现灰.png')}></img>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/我的灰.png')}></img>
                        
                    </il>
                    <li>
                    
                        <span className="bottom_text" >首页</span>
                        <span className="bottom_text" style={{color: '#FFD738'}}>课程</span>
                        <span className="bottom_text">发现</span>
                        <span className="bottom_text">我的</span>

                    </li>
                </div>
                
                   
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


