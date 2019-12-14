import React from 'react'

class HotelChainImages extends React.Component {
    render() {
        return (
            <div className="col-3">
                <img src={this.props.obj.img} className={this.props.obj.class}></img>
            </div>  
        )
    }
}

export default HotelChainImages 
