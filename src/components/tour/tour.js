import React, { Component } from 'react';
import "./tour.scss";
class tour extends Component {
    state={
        showInfo:false
    };
    showItem=()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })

    }
    render() {
        const {id, country,img,name,info}=this.props.tour;
        const {removeTour} = this.props;
        return (
            <div className="tour">
                <div className="tour-img">
                    <img src={img} alt=""/>
                    <span onClick={()=>removeTour(id)}><i className="far fa-times-circle"></i></span>
                </div>
                <div className="tour-info">
                <h3>{country}</h3>
                <h4>{name}</h4>
                <h5>Details <span onClick={this.showItem}
                ><i class="fas fa-angle-down"></i></span>
                {this.state.showInfo && <p>{info}</p> }
                </h5>
                </div>
            </div>
        );
    }
}

export default tour;