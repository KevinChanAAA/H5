import React from 'react';


export default class HomePage extends React.Component{
    render(){
        return(
            <div className="background " >
                <div className="box">
                <i className="icon-user"></i>
                <input className="input_Search" type="text" placeholder="搜索课程" ></input>
                </div>
                <img className="home_photo" src={require('/Users/kevin/gym/src/Photos/home1.png')}></img>
               
                
                   
                  
                
               
            </div>
          
           
            
        );
    }
}


