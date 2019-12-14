import React  from 'react'

const data1 = ["Hotels Near Me", "Hotels in Manali", "Hotels in Manali", "Hotels in Mount Abu", "Hotels in Agra", "Hotels in Haridwar", "Hotels in Alibaug", "Hotels in Coaimbatore"]
const data2 = ["Hotels in Goa", "Hotels in Udaipur", "Hotels in Lonavala", "Hotels in Kodaikanal", "Hotels in Gangtok", "Hotels in Kolkata", "Hotels in MAdarmoni", "Hotels in kasauli"]
const data3 = ["Hotels in Puri", "Hotels in Mussoorie", "Hotels in Munnar", "Hotels in Hyderbad", "Hotels In Coorg", "Hotels in Ahmedabad", 'Hotels in Daman', "Hotels in Dehradun"]
const data4 = ["Hotels in Mahabaleshwar", "Hotels in Pondicherry", "Hotels in Bangalore", 'Hotels in Pune', 'Hotels in Chennai', "Hotels in Shillong", 'Hotels in Yeracud', "Travel Guide"]
const data5 = ["Hotels in Jaipur", "Hotels in Delhi", "Hotels in Mysore", 'Chandigarh', "Hotels in Tirupati", 'Hotels in Rishikesh', "Hotels in Amritsar", "All Ciites Hotel"]
const data6 = ["Hotels in Mahabaleshwar", "Hotels in Pondicherry", "Hotels in Bangalore", 'Hotels in Pune', 'Hotels in Chennai', "Hotels in Shillong", 'Hotels in Yeracud', "Travel Guide"]

class Div extends React.Component {
    render() {
        return (
            <p>{this.props.name}</p>
        )
    }
}

export class FooterSection extends React.Component {
    render() {
        return (
            <div className="bg-dark text-white px-5">
                <div>
                    <h1 className="text-white p-2">OYO The World's Fastest Growing Hotel Chain</h1>
                    <hr className="bg-white"/>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h4>Downlaod the OYO App for exciting offers</h4>
                    </div>
                    <div className="col-4 d-flex">
                        <div>
                            <p>About Us</p>
                            <p>Teams / Careers</p>
                            <p>Blogs</p>
                            <p>Support</p>
                        </div>
                        <div className="ml-3">
                            <p>Official OYO BLog</p>
                            <p>Press Kit</p>
                            <p> OYO Cycle</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <p>Terms and Condiitons</p>
                        <p>Guest Policies</p>
                        <p>Privacy policy</p>
                        <p>Resposible Disclosure</p>
                    </div>
                </div>
                <hr className="bg-white" />
                <div className="d-flex justify-content-around text-center">
                    <div>
                        <h5 className="font-weight-bolder">OYO Townhouse</h5>
                        <h5>Your Friendly Neighbourhood Hotel</h5>
                    </div>
                    <div>
                        <h5 className="font-weight-bolder">OYO Silver Key</h5>
                        <h5>Executive Stays</h5>
                    </div>
                    <div>
                        <h5 className="font-weight-bolder">OYO Home</h5>
                        <h5>Unlocking Homes</h5>
                    </div>
                </div>
                <hr className="bg-white"/>
                <div className="m-5">OYO Hotels</div>
                <div className="row ">
                    <div className='col-2'>
                        {data1.map(e => <Div name={e} />)}
                    </div>
                    <div className='col-2'>
                        {data2.map(e => <Div name={e} />)}
                    </div>
                    <div className='col-2'>
                        {data3.map(e => <Div name={e} />)}
                    </div>
                    <div className='col-2'>
                        {data4.map(e => <Div name={e} />)}
                    </div>
                    <div className='col-2'>
                        {data5.map(e => <Div name={e} />)}
                    </div>
                    <div className='col-2'>
                        {data6.map(e => <Div name={e} />)}
                    </div>
                </div>
                <hr className="bg-white" />
                <h5>@ Copyright OYO Hotels and Homes</h5>
            </div>
        )
    }
}

export default FooterSection
