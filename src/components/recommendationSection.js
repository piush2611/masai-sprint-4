import React from 'react'
import Card from './ReccomendationCards'

// data for carousel1
const data = [
    {img:"https://images.oyoroomscdn.com/uploads/hotel_image/86104/thumb/38b9167ceea16251.jpg", title:"SPOT ON 63778 Sammer Cottages", text:"Next to Dropadi in Goa", rating:"4.2 Very Good", price: "₹ 1014"},
    {img:'https://images.oyoroomscdn.com/uploads/hotel_image/37552/thumb/846535d4b5468251.jpg', title:"Collection O 41201 Village", text:"Near Vagator Beach, Goa", rating:"4.1 Very Good", price:"₹ 2014" },
    {img:'https://images.oyoroomscdn.com/uploads/hotel_image/36873/thumb/e89e478361d06852.jpg', title:"OYO Townhouse 041 Calangute", text:"Behind Santa Durga Temple, Calangute, Goa", rating:"4.5 Excellent", price:"₹ 2014" }
]

//data for carousel2
const data1 = [
    {img:"https://images.oyoroomscdn.com/uploads/hotel_image/59241/thumb/8e5b4338f5f4ae58.jpg", title:'Collection O 41201 Village', text:"Trident Hospital, Hyderbad", rating:"4.3 very Good", price:"₹ 2017"},
    {img:"https://images.oyoroomscdn.com/uploads/hotel_image/16521/thumb/2fff656b5c2d6789.jpg", title:'Collection O 41201 Village', text:"Trident Hospital, Hyderbad", rating:"4.3 very Good", price:"₹ 2020"},
    {img:"https://images.oyoroomscdn.com/uploads/hotel_image/85157/thumb/f0645f961aba24e4.jpg", title:'Collection O 41201 Village', text:"Trident Hospital, Hyderbad", rating:"4.3 very Good", price:"₹ 2020"}
]


class RecommendationSection extends React.Component {
    render() {
        return (    
            <div className="m-5">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div className="row justify-content-around">
                                {data.map((e) => <Card obj ={e} />)}
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row justify-content-around">
                                {data1.map((e) => <Card obj ={e} />)}
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div className="row justify-content-around">
                                {data.map((e) => <Card obj ={e} />)}
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev text-danger" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>  
        )
    }
}

export default RecommendationSection
