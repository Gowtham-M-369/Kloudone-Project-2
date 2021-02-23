import React,{Component, useState} from "react";
import "./profile.css";
import top from './top.jpg';
import my from './my.jfif'
import { render } from "@testing-library/react";



class Card extends Component{
    render(){
    return(
    <div>
        <h3 style={{paddingBottom:"20px"}}>User Profile</h3>
        <div class="flex-container" style={{alignItems:"center"}}>
        <div>  <img src={top}  height="300px"width="400px"/></div>
        <div className="im"> <img src={my} align-items="center" height="100px"width="100px" style={{borderRadius:"50px"}} /></div>
        <div><h2 className="r" style={{lineHeight: "0px"}}>Mike Andrew</h2></div>  
        <div><p className="q">micheal24</p></div> 
        <div><p className="p">Lamborghini mercy your chick she so thirsty I'm<br/> in that two seat lamboo</p></div> 
        </div>
     </div>
    );
    }
}
        

export default Card;