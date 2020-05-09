import React from 'react';


export default class HomePage extends React.Component{
    render(){
        return(
            <div className="background " >
                <div className="box">
                <i className="icon-user"></i>
                <input className="input_Search text_center" type="text" placeholder="搜索课程" ></input>
                </div>
                <img className="home_photo" src={require('/Users/kevin/gym/src/Photos/home1.png')}></img>
               
                <div>
                    <li>
                    <span className="yellow_icon"></span>
                    <span className="home_title">门店信息</span>
                    </li>
                    
                    <div className="home_content_bg">
                        <img className="detail_photo" src={require('/Users/kevin/gym/src/Photos/home2.png')}></img><br></br>
                        <span className="home_content_title">南山大道学府路店（新店试业啦）</span><br></br>
                        <span className="hoem_content_detail">拥有最强大的导师，一对一教学，短周期内即可看到效果…</span><br></br>
                    </div>
                    <div className="home_content_bg">
                        <img className="detail_photo" src={require('/Users/kevin/gym/src/Photos/home3.png')}></img><br></br>
                        <span className="home_content_title">南山大道学府路店（新店试业啦）</span><br></br>
                        <span className="hoem_content_detail">跟随动感音乐一起燃烧体内脂肪，拥有让人羡慕的马甲线…</span><br></br>
                    </div>
                </div>
                <div className="bottom">
                    <il>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/首页.png')}></img>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/课程灰.png')}></img>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/发现灰.png')}></img>
                        <img className="bottom_icon" src={require('/Users/kevin/gym/src/icon/我的灰.png')}></img>
                        
                    </il>
                    <li>
                    
                        <span className="bottom_text" style={{color: '#FFD738'}}>首页</span>
                        <span className="bottom_text">课程</span>
                        <span className="bottom_text">发现</span>
                        <span className="bottom_text">我的</span>

                    </li>
                </div>
                
                   
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


