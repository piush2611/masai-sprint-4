import React from 'react'
import './form.css'

class Form extends React.Component {
    render() {
        return (
            <div>
                <div className="card bg-danger text-white">
                    <div className=" text-center container">
                        <h1 className="font-weight-bolder my-3">World's fastest growing hotel chain</h1>
                        <div className='input-group my-5'>
                            <input className="form-control p-4" placeholder="Search by city, hotel or neighbourhood" type="text"></input>
                            <div className="input-group-append">
                                <span className="input-group-text  bg-light font-weight-bolder">Fri 13th Dec - Sat 14th Dec</span>
                            </div>
                            <div className="input-group-append">
                                <span className="input-group-text   bg-light font-weight-bolder">1 Room, 1 Guest</span>
                            </div>
                            <div className="input-group-append">
                                <span className=" btn btn-success">Search</span>
                            </div>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Form