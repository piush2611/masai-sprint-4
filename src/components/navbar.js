import React from 'react'

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <h1 className=" text-danger font-weight-bolder">OYO</h1>
                    <div className="d-flex">
                        <p className="text-dark pt-3">Become a Wizard member</p> 
                        <div className='mx-2'>
                            <p className="pt-3">English</p>
                        </div>
                        <div className="mx-2 pt-3 ">
                            <p className="text-body  font-weight-bold">Login / Signup</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
