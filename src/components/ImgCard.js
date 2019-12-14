import React from 'react'
import './zoomit.css'

class ImgCard extends React.Component {
    render() {
        return (
                <div className="col-3">
                    <img src={this.props.obj.img} className="img-fluid img-thumbnail zoom" ></img>
                </div>
        )
    }
}

export default ImgCard