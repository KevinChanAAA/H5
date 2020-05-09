import React from 'react';


export default class searching extends React.Component{
    render(){
        return(
            <div className="background " >
                <div className="box">
                <i className="icon-user"></i>
                <input className="input_Search text_center" type="text" placeholder="有氧健身" ></input>
                </div>
               
               
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
                
                
                   
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


