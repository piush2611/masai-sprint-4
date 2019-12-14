import React from 'react'
import ImgCard from './ImgCard'

const imgLinks = [
    {id:4, img:"https://assets.oyoroomscdn.com/20191024_flat40.png"},
    {id:5, img:"https://assets.oyoroomscdn.com/dealtile/20190207_web_tile_premium_hotels.jpg"},
    {id:6, img:"https://assets.oyoroomscdn.com/201909_web.jpg"},
    {id:7, img:"https://assets.oyoroomscdn.com/20191026_powerbreak.png"}
]
class SaveBig extends React.Component {
    render() {
        return (
            <div>
                    <div className="row m-5">
                        {imgLinks.map((e) => <ImgCard obj={e} />)}
                    </div>
            </div>
        )
    }
}

export default SaveBig
