import React, { Component } from 'react';
import Tour from '../tour/tour';
import "./tourList.scss";
import{tourData} from "../../Data";
class tourList extends Component {
    state={tours: tourData};
    removeTour=id=>{
        const {tours}=this.state;
        const listedTours=tours.filter(tour=>id!==tour.id);
        this.setState({
            tours:listedTours
        })
    }
    render() {
        const {tours}=this.state;
        return (
            <div className="tourList">
                {
                    tours.map(tour=>(
                        <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
                    ))

                }
            </div>
        );
    }
}
export default tourList;