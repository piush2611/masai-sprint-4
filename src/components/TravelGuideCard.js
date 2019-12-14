import React from 'react'

class TravelGuideCard extends React.Component {
    render() {
        return (
                <div className="col-4">
                    <img src={this.props.obj.img} className="img-fluid"></img>
                    <div className="card-body">
                        <p className="card-text">{this.props.obj.text}</p>
                    </div>
                    <div className="card-footer bg-white">
                        <p className="text-danger ">Read More</p>
                    </div>
                </div>
        )
    }
}

export default TravelGuideCard
