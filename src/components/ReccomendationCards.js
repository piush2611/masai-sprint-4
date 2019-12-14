import React from 'react'

class Card extends React.Component {
    render() {
        return (
                <div className="card mb-3 col-4">
                    <div className='row no-gutters'>
                        <div className="col-4">
                            <img src={this.props.obj.img} className="card-img h-100"></img>
                        </div>
                        <div className="col-8">
                            <div className="card-body">
                                <p className="card-title font-weight-bolder">{this.props.obj.title}</p>
                                <p className="card-text">{this.props.obj.text}</p>
                                <p className="card-text">{this.props.obj.rating}</p>
                                <p className="card-text text-danger">{this.props.obj.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card
