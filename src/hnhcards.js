import React from 'react'

class Hnhcards extends React.Component {
    render() {
        return (
            <div>
                <div className="row p-3 bg-light">
                    <div className="col-4 text-center">
                        <img src={this.props.obj.img} className="img-fluid"></img><br/>
                        <button className={this.props.obj.class}>{this.props.obj.btnName}</button>
                    </div>
                    <div className="col-8">
                        <p>{this.props.obj.title}</p>
                        <p className="text-danger">{this.props.obj.text}</p>
                    </div>
                </div>
            </div>
        )
    }
}  

export default Hnhcards
