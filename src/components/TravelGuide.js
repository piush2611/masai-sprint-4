import React from 'react'
import TravelGuideCard from './TravelGuideCard'

const dataOfTravelGuide = [
    {img:"https://assets.oyoroomscdn.com/cmsMedia/90b1c716-44c8-4874-a150-56d7d1e60438.jpg", text:"Goa is famous for its beaches and party life but there are a few who loves to visit Goa for its serenity and calm environment. This state has historic temples and some of the most famous churches in India", id:31},
    {img:"https://assets.oyoroomscdn.com/cmsMedia/4b83af28-09a4-482f-8c91-53dc5f1f9ebd.jpg", text:"Manali, during winter, is covered in thick rows of ice which is probably a beautiful sight to behold in itself. One might say, visiting Manali without experiencing the ice, is missing out on its full glory", id:32},
    {img:"https://assets.oyoroomscdn.com/cmsMedia/cc020903-9d4a-4a45-ac2c-f5970f47a668.jpg", text:"Delhi is a melting pot of cultures that has been shaped by the people and cultures that lived here over hundreds of years.", id:33}
]

class TravelGuide extends React.Component { 
    render() {
        return (
            <div>
                <div className="row m-5 d-flex">
                    {dataOfTravelGuide.map((e) => <TravelGuideCard key={e.id} obj={e} />)}
                </div>
            </div>
        )
    }
}

export default TravelGuide
