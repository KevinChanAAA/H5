import React from 'react';


export default class PayFail extends React.Component{
    render(){
        return(
            <div className="background " >
                <div className="head_padding">
                    <img className="pay" src={require('/Users/kevin/gym/src/icon/失败.png')}></img><br></br>
                    <span className="title_text">支付失败</span><br></br>
                    <span className="description_text">抱歉，如果你已扣费请联系xxxx-xxxxxxx</span>
                    
                </div>
                <div className="bottom">
                <span className="course_text">查看其它课程</span>
                </div>
                
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


