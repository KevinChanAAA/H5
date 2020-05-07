import React from 'react';


export default class PaySuccess extends React.Component{
    render(){
        return(
            <div className="background " >
                <div className="head_padding">
                    <img className="pay" src={require('/Users/kevin/gym/src/icon/成功.png')}></img><br></br>
                    <span className="title_text">支付成功</span><br></br>
                    <span className="description_text">你的上课时间为每周五、周六晚上19:00-22:00<br></br>请准时到达</span>
                    
                </div>
                <div className="bottom">
                <span className="course_text">进入课程</span>
                </div>
                
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


