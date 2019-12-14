import React  from 'react'
import Hnhcards from './hnhcards'


const dataOfHnH = [
    {id:11, img:"https://assets.oyoroomscdn.com/cmsMedia/985683_items_itemImage_1.jpg", title:"Based on the needs of the millennial traveller", text:"Explore Townhouse", btnName:"TOWNHOUSE", class:"btn btn-success"},
    {id:12, img:"https://assets.oyoroomscdn.com/cmsMedia/985683_items_itemImage_2.jpg", title:"Villas & Apartments with extra space & privacy", text:"Explore OYO Home", btnName:"OYO HOME", class:"btn btn-danger"},
    {id:13, img:"https://assets.oyoroomscdn.com/cmsMedia/985683_items_itemImage_3.jpg", title:"Comfortable stays curated for our elite guests", text:"Explore Capital O", btnName:"CAPITAL O", class:"btn btn-dark"},
    {id:14, img:"https://assets.oyoroomscdn.com/cmsMedia/985683_items_itemImage_1.jpg", title:"Executive apartments with stylish interiors", text:"Explore Silver Key", btnName:"SILVERKEY", class:"btn btn-info"}
]

class HotelnHomes extends React.Component {
    
    render() {
        return (
            <div className="row m-5">
                <div className="col-5">
                        {dataOfHnH.map((e) => <Hnhcards key={dataOfHnH.id} obj={e} />)}
                </div>
                <div className="col-7 h-100">
                    <div className="card text-white">
                        <img src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="card-img h-75"></img>
                        <div className="card-img-overlay">
                            <h5 className="card-title">Your Friendly Neighbourhood Hotel!</h5>
                            <p className="card-text">Executive apartments with stylish interiors and all the comforts of home, minus the rates and rules of hotel</p>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default HotelnHomes
