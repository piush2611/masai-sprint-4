import React from 'react'

class Introducing extends React.Component {
    render() {
        return (
            <div className="row m-5 text-center">
                <div className="col-6 p-4 shadow">
                    <img src="https://images.pexels.com/photos/169192/pexels-photo-169192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img-thumbnail w-100 h-50"></img>
                    <img src="https://assets.oyoroomscdn.com/cmsMedia/d7316ee1-51a8-47e5-b31a-81d6de5e24e9.png" className="mt-5"></img>
                    <p className="text-muted mb-5">India's largest wedding company</p>
                    <h2 className="text-body mb-5">Hassle free event at guaranteed best prices</h2>
                    <button className="btn btn-success py-3 px-4">Start Planning</button>
                </div>
                <div className="col-6 p-4 shadow">
                    <img src="https://assets.oyoroomscdn.com/cmsMedia/975689_items_itemImage_2.jpg" className="img-thumbnail h-50"></img>
                    <img src="https://assets.oyoroomscdn.com/cmsMedia/975689_items_itemSubImage_2.jpg" className="w-25 mt-5"></img>
                    <p className="text-muted mb-5">Plan your Holiday</p>
                    <h2 className="text-body m-3">Maximise your dream holiday with an all in one package</h2>
                    <button className="btn btn-success py-3 px-4">Plan Your Holiday</button>
                </div>
            </div>
        )
    }
}

export default Introducing
