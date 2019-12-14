import React from 'react'
import HotelChainImages from './HotelChainImages'

const imgLinks = [
    {img:"https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_6.jpg", id:23, class:"mt-5  img-fluid"},
    {img:"https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_4.jpg", id:22, class:"mt-4 img-fluid"},
    {img:"https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_2.jpg", id:21, class:"m-0 img-fluid "}
]
const imgLinks2 = [
    {img:"https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_1.jpg", id:24, class:"m-5 img-fluid "},
    {img:"https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_5.jpg", id:26, clas:"m-5 mt-5  mb-5 img-fluid"},
    {img:"https://assets.oyoroomscdn.com/cmsMedia/432737_widgetCountryItems_itemImage_3.jpg", id:25, class:"ml-5 mt-n5 img-fluid"}
    
]

class HotelChain extends React.Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container">
                <div className='row'>
                    <div className="col-6">
                        <div className="row">
                        {imgLinks.map((e) => <HotelChainImages obj={e} key={e.id} />)}
                        </div>
                        <div className="row">
                        {imgLinks2.map((e) => <HotelChainImages obj={e} key={e.id} />)}
                        </div>
                    </div>
                    <div className="col-6 p-5">
                        <h2 className="text-body">World's fastest growing hotel chain</h2>
                        <p className="text-muted">More Destinations. More Ease. More Affordable.</p>
                        <div className="row">
                            <div className="col-4">
                                <h1>800+ /</h1>
                                <p className="text-muted">Cities</p>
                            </div>
                            <div className="col-4">
                                <h1>35K + /</h1>
                                <p className="text-muted">Exclusive Hotels</p>
                            </div>
                            <div className="col-4">
                                <h1>1.2M+/</h1>
                                <p className="text-muted">Exclusive Rooms</p>
                            </div>
                        </div>
                        <div className="row my-5    ">
                            <div className="col-4">INDIA</div>
                            <div className="col-4">CHINA</div>
                            <div className="col-4">MALAYSIA</div>
                        </div>
                        <div className="row my-5">
                            <div className="col-4">NEPAL</div>
                            <div className="col-4">INDONESIA</div>
                            <div className="col-4">UAE</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default HotelChain


