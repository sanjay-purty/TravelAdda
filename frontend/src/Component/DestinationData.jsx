 import { Component } from "react";
import"./DestiStyle.css"
import img3 from "../assets/img3.jpg"
import img2 from "../assets/img2.jpg"

 class DestinationData extends Component{
    render(){
        return(

            <div className={this.props.classname}>
                                <div className="des-text">
                                    <h2> {this.props.heading}</h2>
                                    <p>{this.props.text} </p>
                                </div>
            
                                <div className="image">
                                    <img src={this.props.img2} alt="img" />
                                     <img src={this.props.img3} alt="img" />
                                </div>
                             </div>
        )
    }
 }
 export default DestinationData;