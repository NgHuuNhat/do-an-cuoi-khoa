import React from 'react'

export default function Card() {
    return (
        <div className="card">
            <img className="card-img-top" src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4NjI3OTI1MjIxNDQyOA%3D%3D/original/bc989f2d-eca8-4bcf-a9b0-b70b8e685a64.jpeg?im_w=1440&im_q=highq" alt="Card image" />
            <div className="position-absolute bottom-1 left-1 w-100 text-light">
                <h4 className="card-title">John Doe</h4>
                <p className="card-text">Some example text.</p>
                <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>

    )
}
