import React from 'react'

class OyoStory extends React.Component {
    render() {
        return (
            <div>
                <div class="card bg-dark text-white">
                    <img src="https://assets.oyoroomscdn.com/cmsMedia/22180061-d3db-40cd-b403-b001eedf05d4.jpg" class="card-img h-50" alt="..."/>
                    <div class="card-img-overlay">
                    <div class="card w-25 m-5">
                        <div class="card-body">
                            <div className="d-flex">
                                <h1 class="card-title display-2 text-body font-weight-bolder">42</h1>
                                <p className="text-body font-weight-bolder mt-4">People check into an OYO every 10 seconds</p>
                            </div>
                            <p class="card-text text-dark">With each booking, every stay is a curated experience of the good life.</p>
                            <button className="btn btn-success px-5 py-3 text-white">Our Story</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OyoStory
